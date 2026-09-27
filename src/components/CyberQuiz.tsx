import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/cyberFraudsData';
import { CheckCircle2, XCircle, RotateCcw, Award, ArrowRight, ShieldCheck } from 'lucide-react';

export const CyberQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<{ [key: number]: boolean }>({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];
  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectOption = (optionIndex: number) => {
    if (submittedAnswers[currentIdx]) return; // already submitted this question
    setSelectedAnswers({ ...selectedAnswers, [currentIdx]: optionIndex });
  };

  const handleSubmitAnswer = () => {
    setSubmittedAnswers({ ...submittedAnswers, [currentIdx]: true });
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedAnswers({});
    setSubmittedAnswers({});
    setQuizCompleted(false);
  };

  // Calculate score
  const correctCount = Object.keys(submittedAnswers).filter(
    (key) => selectedAnswers[Number(key)] === QUIZ_QUESTIONS[Number(key)].correctIndex
  ).length;

  return (
    <section id="quiz-section" className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
            Citizen Readiness Check
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
            Can You Spot the Cyber Trap? (Interactive Quiz)
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Test yourself against real scenarios faced by Indian internet and UPI users. 
            Evaluate your scam resistance and discover crucial safety rules.
          </p>
        </div>

        {!quizCompleted ? (
          <div className="bg-stone-50 rounded-xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            {/* Progress Bar */}
            <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
              <span>Question {currentIdx + 1} of {totalQuestions}</span>
              <span className="font-semibold text-amber-700">
                Score: {correctCount} / {Object.keys(submittedAnswers).length}
              </span>
            </div>
            <div className="w-full h-1.5 bg-stone-200 rounded-full mb-6 overflow-hidden">
              <div
                className="h-full bg-amber-500 transition-all duration-300 rounded-full"
                style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            {/* Scenario Box */}
            <div className="p-4 bg-white rounded-lg border border-stone-200 mb-6 text-xs sm:text-sm text-stone-800 leading-relaxed">
              <span className="font-bold text-stone-900 block mb-1">Scenario:</span>
              <p>{currentQ.scenario}</p>
            </div>

            {/* Question */}
            <h3 className="text-base sm:text-lg font-display font-bold text-stone-900 mb-4">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedAnswers[currentIdx] === idx;
                const isSubmitted = submittedAnswers[currentIdx];
                const isCorrect = idx === currentQ.correctIndex;

                let optionStyle = 'bg-white border-stone-200 hover:border-amber-400 text-stone-800';
                if (isSelected && !isSubmitted) {
                  optionStyle = 'bg-amber-50 border-amber-500 text-amber-950 font-medium shadow-sm';
                } else if (isSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-red-50 border-red-400 text-red-950 line-through';
                  } else {
                    optionStyle = 'bg-stone-100/60 border-stone-200 text-stone-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isSubmitted}
                    className={`w-full p-3.5 rounded-lg border text-left text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                  >
                    <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {isSubmitted && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    {isSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation card after submit */}
            {submittedAnswers[currentIdx] && (
              <div className="p-4 bg-white rounded-lg border border-amber-200 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-800 mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Golden Cyber Rule:</span>
                </div>
                <p className="text-xs font-semibold text-stone-900 mb-2">
                  {currentQ.safetyRule}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-200">
              {!submittedAnswers[currentIdx] ? (
                <button
                  disabled={selectedAnswers[currentIdx] === undefined}
                  onClick={handleSubmitAnswer}
                  className="px-5 py-2 rounded bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs disabled:opacity-40 transition-colors cursor-pointer"
                >
                  Verify Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  <span>{currentIdx < totalQuestions - 1 ? 'Next Question' : 'View Results'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Results Screen */
          <div className="bg-stone-50 rounded-xl p-8 border border-stone-200 text-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display font-bold text-stone-900 mb-1">
              Readiness Check Complete
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mb-6">
              You scored <strong className="text-stone-900 font-bold">{correctCount} out of {totalQuestions}</strong> correct.
            </p>

            <div className="p-4 bg-white rounded-lg border border-stone-200 max-w-md mx-auto mb-6 text-xs text-left space-y-2">
              <div className="font-bold text-stone-900 border-b border-stone-100 pb-1">
                Essential Takeaways to Share:
              </div>
              <p className="text-stone-700">✓ UPI PIN is strictly for paying, never for receiving money.</p>
              <p className="text-stone-700">✓ Digital Arrest does not exist under Indian law. Disconnect video calls immediately.</p>
              <p className="text-stone-700">✓ Lock Aadhaar biometrics on mAadhaar to halt AePS cash cloning.</p>
              <p className="text-stone-700">✓ In case of fraud, dial 1930 within the first 2 hours.</p>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Cyber Safety Quiz</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
