import { survey } from './survey'
import { describe, it, expect } from 'vitest'
import mockSurvey from '../../../public/api/survey.json'

describe('survey component', () => {
  it('should not render if no survey', () => {
    survey({ activeFilters: {} })(document.body)
    expect(document.body.querySelector('.survey')).toBe(null)
  })

  it('should render survey', () => {
    survey({ survey: mockSurvey, activeFilters: {} })(document.body)
    expect(document.body.innerHTML).toMatchInlineSnapshot(`
      "
                <div class=\\"survey-container\\">
                  <h2 class=\\"survey-heading\\">Talking about brands</h2>
                  <div class=\\"question\\">
                    <h3 class=\\"question-heading\\">Which of these social platforms do you use?</h3>

                    <div class=\\"answers\\">
                       <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 70%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 70%\\"></div>

                          <div class=\\"label\\">Facebook</div>

                          <div class=\\"value\\">70%</div>
                        </div> <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 68%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 68%\\"></div>

                          <div class=\\"label\\">YouTube</div>

                          <div class=\\"value\\">68%</div>
                        </div> <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 50%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 50%\\"></div>

                          <div class=\\"label\\">Instagram</div>

                          <div class=\\"value\\">50%</div>
                        </div> <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 42%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 42%\\"></div>

                          <div class=\\"label\\">Twitter</div>

                          <div class=\\"value\\">42%</div>
                        </div> <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 48%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 48%\\"></div>

                          <div class=\\"label\\">Snapchat</div>

                          <div class=\\"value\\">48%</div>
                        </div> <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 40%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 40%\\"></div>

                          <div class=\\"label\\">Linkedin</div>

                          <div class=\\"value\\">40%</div>
                        </div> <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 0%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 0%\\"></div>

                          <div class=\\"label\\">Other</div>

                          <div class=\\"value\\">0%</div>
                        </div> <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 0%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 0%\\"></div>

                          <div class=\\"label\\">None</div>

                          <div class=\\"value\\">0%</div>
                        </div>
                    </div>
                  </div>
                </div>
              "
    `)
  })

  it('should render survey with active filters', () => {
    survey({ survey: mockSurvey, activeFilters: { gender: 'female' } })(document.body)
    expect(document.body.innerHTML).toMatchInlineSnapshot(`
      "
                <div class=\\"survey-container\\">
                  <h2 class=\\"survey-heading\\">Talking about brands</h2>
                  <div class=\\"question\\">
                    <h3 class=\\"question-heading\\">Which of these social platforms do you use?</h3>

                    <div class=\\"answers\\">
                       <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 63.829787234042556%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 70%\\"></div>

                          <div class=\\"label\\">Facebook</div>

                          <div class=\\"value\\">64%</div>
                        </div> <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 72.34042553191489%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 68%\\"></div>

                          <div class=\\"label\\">YouTube</div>

                          <div class=\\"value\\">72%</div>
                        </div> <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 36.170212765957444%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 50%\\"></div>

                          <div class=\\"label\\">Instagram</div>

                          <div class=\\"value\\">36%</div>
                        </div> <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 42.5531914893617%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 42%\\"></div>

                          <div class=\\"label\\">Twitter</div>

                          <div class=\\"value\\">43%</div>
                        </div> <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 44.680851063829785%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 48%\\"></div>

                          <div class=\\"label\\">Snapchat</div>

                          <div class=\\"value\\">45%</div>
                        </div> <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 38.29787234042553%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 40%\\"></div>

                          <div class=\\"label\\">Linkedin</div>

                          <div class=\\"value\\">38%</div>
                        </div> <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 0%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 0%\\"></div>

                          <div class=\\"label\\">Other</div>

                          <div class=\\"value\\">0%</div>
                        </div> <div class=\\"answer\\">
                          <div class=\\"track\\" style=\\"width: 0%\\"></div>
                          <div class=\\"marker\\" style=\\"width: 0%\\"></div>

                          <div class=\\"label\\">None</div>

                          <div class=\\"value\\">0%</div>
                        </div>
                    </div>
                  </div>
                </div>
              "
    `)
  })
})
