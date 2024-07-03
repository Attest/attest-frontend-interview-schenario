import { html, render } from '../../dom'
import { State, SurveyResults } from '../../store'

function getAllRespondentIds({ survey }: State): string[] {
  return Object.keys(((survey as SurveyResults) ?? {}).respondent_demographics ?? {})
}

function getActiveRespondentIds(
  answerRespondents: string[],
  filters: Record<string, string>,
): string[] {
  if (Object.keys(filters).length === 0) return answerRespondents
  return answerRespondents
}

function percentageOf(base: number, value: number): number {
  return base === 0 || value === 0 ? 0 : (100 / base) * value
}

export function survey(state: State): ReturnType<typeof render> {
  const allRespondentIds = getAllRespondentIds(state)
  return !state.survey
    ? render(html`<div class="survey-container"></div>`)
    : render(
        html`
          <div class="survey-container">
            <h2 class="survey-heading">${state.survey.title}</h2>
            <div class="question">
              <h3 class="question-heading">${state.survey.questions[0]?.title ?? 'Not Defined'}</h3>

              <div class="answers">
                ${state.survey.questions[0]?.answers.map(({ respondent_ids, text }) => {
                  const activeRespondentsPercentage = percentageOf(
                    allRespondentIds.length,
                    getActiveRespondentIds(respondent_ids, state.activeFilters).length,
                  )
                  return html` <div class="answer">
                    <div class="track" style="width: ${activeRespondentsPercentage}%"></div>
                    <div
                      class="marker"
                      style="width: ${percentageOf(
                        allRespondentIds.length,
                        respondent_ids.length,
                      )}%"
                    ></div>

                    <div class="label">${text}</div>

                    <div class="value">${Math.round(activeRespondentsPercentage)}%</div>
                  </div>`
                })}
              </div>
            </div>
          </div>
        `,
      )
}
