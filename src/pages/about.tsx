import PageTitle from "@/components/PageTitle"
import SectionContainer from "@/components/SectionContainer"

export default function About() {

  return (
    <SectionContainer>
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <div>
                <PageTitle>About</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="pt-8 pb-8 dark:divide-gray-700"
          >
            <div>
              <p>Linh Le is a professor of atmospheric sciences at the Stanford AI Lab. His research interests includes complexity modelling of tailwinds, headwinds and crosswinds.</p>
              <p>He leads the clean energy group which develops 3D air pollution-climate models, writes differential equation solvers, and manufactures titanium plated air ballons. In his free time he bakes raspberry pi.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.</p>
            </div>
          </div>

        </div>
      </article>

    </SectionContainer>
  )
}
