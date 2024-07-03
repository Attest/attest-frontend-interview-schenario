import { html, render } from '../../dom'
import { setState, State } from '../../store'

export function filters(state: State): ReturnType<typeof render> {
  return !state.filterDefinition
    ? render(html`<div class="filters-container"></div>`)
    : render(
        html`<div class="filters-container">
          <h2 class="filters-heading">Filters</h2>
          <div class="demographics">
            ${state.filterDefinition.demographics.map(
              demographic => html` <h3 class="demographics-heading">${demographic.display}</h3>
                <div class="options">
                  ${demographic.options.map(
                    option =>
                      html`<div
                        class="option js-option"
                        data-selected="${state.activeFilters[demographic.name] === option.name}"
                        data-category="${demographic.name}"
                        data-name="${option.name}"
                      >
                        <div class="label">${option.display}</div>
                        <div class="count">
                          ${sumDemographics(state)[demographic.name]?.[option.name]}%
                        </div>
                      </div>`,
                  )}
                </div>`,
            )}
          </div>
        </div>`,
        el =>
          el.querySelectorAll('.js-option').forEach(elOption =>
            elOption.addEventListener('click', e => {
              const activeFilters = { ...state.activeFilters }
              const target = e.currentTarget as HTMLElement
              const { name, category, selected } = target.dataset
              if (!name || !category) return

              if (selected !== 'true') {
                activeFilters[category] = name
                target.setAttribute('data-selected', 'true')
              } else {
                target.setAttribute('data-selected', 'false')
                delete activeFilters[category]
              }

              setState({ activeFilters })
            }),
          ),
      )
}

function sumDemographics({ survey }: State): Record<string, Record<string, number>> {
  if (!survey) return {}
  const counts = {} as any
  Object.values(survey.respondent_demographics).map(demographics => {
    Object.entries(demographics).map(([key, value]) => {
      if (counts[key] === undefined) {
        counts[key] = {}
      }

      if (!counts[key][value]) {
        counts[key][value] = 0
      }

      counts[key][value] += 1
    })
  })

  return counts
}
