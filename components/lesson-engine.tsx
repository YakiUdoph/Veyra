"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { PronunciationAudioPlayer } from "@/components/pronunciation-audio-player";
import {
  evaluateExercise,
  getLessonExercises,
  nextExerciseIndex,
  type ExerciseEvaluation,
  type LessonDefinition,
} from "@/lib/content-engine";

type LessonStage = "situation" | "exercise" | "complete";

export function LessonEngine({ lesson }: { lesson: LessonDefinition }) {
  const exercises = getLessonExercises(lesson);
  const situation = lesson.situations[0];
  const [stage, setStage] = useState<LessonStage>("situation");
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const [evaluation, setEvaluation] = useState<ExerciseEvaluation | null>(null);
  const [selectionError, setSelectionError] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);
  const exerciseHeadingRef = useRef<HTMLHeadingElement>(null);
  const situationHeadingRef = useRef<HTMLHeadingElement>(null);
  const completionHeadingRef = useRef<HTMLHeadingElement>(null);
  const exercise = exercises[exerciseIndex];

  useEffect(() => {
    if (evaluation || selectionError) statusRef.current?.focus();
  }, [evaluation, selectionError]);

  function beginLesson() {
    setStage("exercise");
    window.requestAnimationFrame(() => exerciseHeadingRef.current?.focus());
  }

  function submitAnswer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = evaluateExercise(exercise, selectedOptionId || null);
    if (result.status === "incomplete") {
      setSelectionError(result.message);
      setEvaluation(null);
      return;
    }
    setSelectionError("");
    setEvaluation(result);
  }

  function continueLesson() {
    const nextIndex = nextExerciseIndex(exerciseIndex, exercises.length);
    setSelectedOptionId("");
    setEvaluation(null);
    setSelectionError("");
    if (nextIndex === null) {
      setStage("complete");
      window.requestAnimationFrame(() => completionHeadingRef.current?.focus());
      return;
    }
    setExerciseIndex(nextIndex);
    window.requestAnimationFrame(() => exerciseHeadingRef.current?.focus());
  }

  function restartLesson() {
    setExerciseIndex(0);
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
          {situation.title}
        </h1>
        <p className="lesson-lede">{situation.context}</p>
        <div className="fixture-notice">
          <strong>Test fixture only</strong>
          <p>
            This English-only sequence tests the reusable interaction engine. It
            is not a German lesson, translation, pronunciation guide, or
            reviewed learning content.
          </p>
        </div>
        <PronunciationAudioPlayer
          audio={null}
          label="No recording is attached to this prototype fixture."
          unavailableMessage="No licensed, locale-matched, reviewed pronunciation recording is available for this test fixture."
        />
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
            {exerciseIndex + 1} of {exercises.length}
          </span>
        </div>
        <progress
          aria-label={`Lesson progress: question ${exerciseIndex + 1} of ${exercises.length}`}
          value={exerciseIndex + 1}
          max={exercises.length}
        />
      </div>
      <h1
        className="lesson-question-title"
        id="question-title"
        ref={exerciseHeadingRef}
        tabIndex={-1}
      >
        {exercise.prompt}
      </h1>

      <form onSubmit={submitAnswer} noValidate>
        <fieldset className="answer-group" disabled={evaluation !== null}>
          <legend>Choose one answer</legend>
          {exercise.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrect = option.id === exercise.acceptedOptionId;
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
                className={`answer-option${isSelected ? " is-selected" : ""}${evaluation && isCorrect ? " is-correct" : ""}${evaluation && isSelected && !isCorrect ? " is-incorrect" : ""}`}
                key={option.id}
              >
                <input
                  type="radio"
                  name={exercise.id}
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
            className={`answer-status ${evaluation?.status === "correct" ? "is-correct" : "is-error"}`}
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
              {exerciseIndex === exercises.length - 1
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
