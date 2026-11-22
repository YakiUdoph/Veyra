"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import {
  evaluateAnswer,
  germanAccommodationTestFixture,
  nextQuestionIndex,
  type AnswerEvaluation,
} from "@/lib/lesson-prototype";

type LessonStage = "situation" | "question" | "complete";

const fixture = germanAccommodationTestFixture;

export function LessonPrototype() {
  const [stage, setStage] = useState<LessonStage>("situation");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const [evaluation, setEvaluation] = useState<AnswerEvaluation | null>(null);
  const [selectionError, setSelectionError] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);
  const questionHeadingRef = useRef<HTMLHeadingElement>(null);
  const situationHeadingRef = useRef<HTMLHeadingElement>(null);
  const completionHeadingRef = useRef<HTMLHeadingElement>(null);

  const question = fixture.questions[questionIndex];

  useEffect(() => {
    if (evaluation || selectionError) {
      statusRef.current?.focus();
    }
  }, [evaluation, selectionError]);

  function beginLesson() {
    setStage("question");
    window.requestAnimationFrame(() => questionHeadingRef.current?.focus());
  }

  function submitAnswer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedOptionId) {
      setSelectionError("Choose one test answer before checking.");
      setEvaluation(null);
      return;
    }

    setSelectionError("");
    setEvaluation(evaluateAnswer(question, selectedOptionId));
  }

  function continueLesson() {
    const nextIndex = nextQuestionIndex(
      questionIndex,
      fixture.questions.length,
    );

    setSelectedOptionId("");
    setEvaluation(null);
    setSelectionError("");

    if (nextIndex === null) {
      setStage("complete");
      window.requestAnimationFrame(() => completionHeadingRef.current?.focus());
      return;
    }

    setQuestionIndex(nextIndex);
    window.requestAnimationFrame(() => questionHeadingRef.current?.focus());
  }

  function restartLesson() {
    setQuestionIndex(0);
    setSelectedOptionId("");
    setEvaluation(null);
    setSelectionError("");
    setStage("situation");
    window.requestAnimationFrame(() => situationHeadingRef.current?.focus());
  }

  if (stage === "situation") {
    return (
      <section className="lesson-card" aria-labelledby="situation-title">
        <p className="lesson-step">Situation</p>
        <h1 id="situation-title" ref={situationHeadingRef} tabIndex={-1}>
          Read the context before answering.
        </h1>
        <p className="lesson-lede">{fixture.situation}</p>
        <div className="fixture-notice">
          <strong>Test fixture only</strong>
          <p>
            This English-only sequence tests the interaction pattern. It is not
            a German lesson, translation, pronunciation guide, or reviewed
            learning content.
          </p>
        </div>
        <button className="button button-primary" onClick={beginLesson}>
          Begin test interaction
        </button>
      </section>
    );
  }

  if (stage === "complete") {
    return (
      <section className="lesson-card" aria-labelledby="complete-title">
        <p className="lesson-step">Complete</p>
        <h1 id="complete-title" ref={completionHeadingRef} tabIndex={-1}>
          Local interaction complete.
        </h1>
        <p className="lesson-lede">
          You reached the end of this test sequence. No result, answer history,
          personal data, or achievement was saved.
        </p>
        <div className="completion-actions">
          <button className="button button-primary" onClick={restartLesson}>
            Restart interaction
          </button>
          <Link className="button button-secondary" href="/">
            Return to foundation
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      className="lesson-card lesson-question-card"
      aria-labelledby="question-title"
    >
      <div className="lesson-progress">
        <div className="lesson-progress-copy">
          <span>Question</span>
          <span>
            {questionIndex + 1} of {fixture.questions.length}
          </span>
        </div>
        <progress
          aria-label={`Lesson progress: question ${questionIndex + 1} of ${fixture.questions.length}`}
          value={questionIndex + 1}
          max={fixture.questions.length}
        />
      </div>
      <h1
        className="lesson-question-title"
        id="question-title"
        ref={questionHeadingRef}
        tabIndex={-1}
      >
        {question.prompt}
      </h1>

      <form onSubmit={submitAnswer} noValidate>
        <fieldset className="answer-group" disabled={evaluation !== null}>
          <legend>Choose one answer</legend>
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrect = option.id === question.correctOptionId;
            const answerState = evaluation
              ? isCorrect
                ? "Correct answer"
                : isSelected
                  ? "Selected — incorrect"
                  : null
              : isSelected
                ? "Selected"
                : null;

            return (
              <label
                className={`answer-option${isSelected ? " is-selected" : ""}${
                  evaluation && isCorrect ? " is-correct" : ""
                }${
                  evaluation && isSelected && !isCorrect ? " is-incorrect" : ""
                }`}
                key={option.id}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option.id}
                  checked={isSelected}
                  onChange={(event) => {
                    setSelectedOptionId(event.target.value);
                    setSelectionError("");
                  }}
                />
                <span className="answer-label">{option.label}</span>
                {answerState ? (
                  <span className="answer-state">{answerState}</span>
                ) : null}
              </label>
            );
          })}
        </fieldset>

        {(selectionError || evaluation) && (
          <div
            className={`answer-status ${
              evaluation?.status === "correct" ? "is-correct" : "is-error"
            }`}
            ref={statusRef}
            role={selectionError ? "alert" : "status"}
            tabIndex={-1}
          >
            <strong>
              {selectionError
                ? "Answer required"
                : evaluation?.status === "correct"
                  ? "Good choice"
                  : evaluation?.status === "invalid"
                    ? "Answer unavailable"
                    : "Review the detail"}
            </strong>
            <p>{selectionError || evaluation?.message}</p>
          </div>
        )}

        <div className="lesson-actions">
          {!evaluation ? (
            <button className="button button-primary" type="submit">
              Check answer
            </button>
          ) : (
            <button
              className="button button-primary"
              type="button"
              onClick={continueLesson}
            >
              {questionIndex === fixture.questions.length - 1
                ? "Finish interaction"
                : "Next question"}
            </button>
          )}
          <button
            className="button button-quiet"
            type="button"
            onClick={restartLesson}
          >
            Restart
          </button>
        </div>
      </form>
    </section>
  );
}
