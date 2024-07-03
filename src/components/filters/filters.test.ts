import { filters } from './filters'
import { describe, it, expect } from 'vitest'
import mockSurvey from '../../../public/api/survey.json'
import mockFilterDefinition from '../../../public/api/filter-definition.json'
import { getState } from '../../store'

describe('option component', () => {
  it('should render filters', () => {
    filters({ survey: mockSurvey, filterDefinition: mockFilterDefinition, activeFilters: {} })(
      document.body,
    )
    expect(document.body.querySelectorAll('.option')).toHaveLength(13)
  })

  it('should set filters on click of option', async () => {
    const state = getState()
    filters({
      survey: mockSurvey,
      filterDefinition: mockFilterDefinition,
      activeFilters: state.activeFilters,
    })(document.body)
    const elOption = document.body.querySelector<HTMLElement>('.option')
    elOption?.dispatchEvent(new MouseEvent('click'))
    expect(state.activeFilters).toStrictEqual({ gender: 'male' })
    expect(elOption?.dataset.selected).toStrictEqual('true')
  })
})
