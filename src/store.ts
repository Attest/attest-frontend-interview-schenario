export interface SurveyResults {
  title: string
  questions: {
    title: string
    question_type: string
    answers: {
      text: string
      respondent_ids: string[]
    }[]
  }[]
  respondent_demographics: { [respondentId: string]: Record<string, string> }
}

export interface Filters {
  demographics: {
    name: string
    display: string
    options: {
      name: string
      display: string
    }[]
  }[]
}

export interface State {
  survey?: SurveyResults
  filterDefinition?: Filters
  activeFilters: Record<string, string>
}

type Subscriber = (state: State) => void

const state: State = {
  activeFilters: {},
}

const subscribers: Subscriber[] = []

export function setState(obj: Partial<State>) {
  Object.assign(state, obj)
  notifySubscribers()
}

export function subscribe(fn: Subscriber) {
  subscribers.push(fn)
}

function notifySubscribers() {
  subscribers.forEach(fn => fn(state))
}

export function getState() {
  return state
}
