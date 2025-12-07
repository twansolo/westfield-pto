import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bylaws & Standing Rules | Westfield PTO",
  description: "View the official bylaws and standing rules of the Westfield Parent Teacher Organization.",
};

export default function BylawsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Bylaws & Standing Rules
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            The governing documents that guide our organization, adopted November 8, 2011.
          </p>
          {/* Download Button */}
          <a
            href="/Westfield-PTO-Bylaws-and-Standing-Rules.pdf"
            download
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-white border-b border-border sticky top-16 lg:top-20 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-foreground">
              <span>Table of Contents</span>
              <svg className="w-5 h-5 text-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <nav className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <a href="#article-i" className="text-primary hover:underline">Article I. Name</a>
              <a href="#article-ii" className="text-primary hover:underline">Article II. Purposes</a>
              <a href="#article-iii" className="text-primary hover:underline">Article III. Basic Policies</a>
              <a href="#article-iv" className="text-primary hover:underline">Article IV. Membership</a>
              <a href="#article-v" className="text-primary hover:underline">Article V. Officers</a>
              <a href="#article-vi" className="text-primary hover:underline">Article VI. Duties of Officers</a>
              <a href="#article-vii" className="text-primary hover:underline">Article VII. Executive Committee</a>
              <a href="#article-viii" className="text-primary hover:underline">Article VIII. Leadership Committee</a>
              <a href="#article-ix" className="text-primary hover:underline">Article IX. Meetings</a>
              <a href="#article-x" className="text-primary hover:underline">Article X. Committees</a>
              <a href="#article-xi" className="text-primary hover:underline">Article XI. Finances</a>
              <a href="#article-xii" className="text-primary hover:underline">Article XII. Parliamentary Authority</a>
              <a href="#article-xiii" className="text-primary hover:underline">Article XIII. Amendments</a>
              <a href="#article-xiv" className="text-primary hover:underline">Article XIV. Committees</a>
              <a href="#article-xv" className="text-primary hover:underline">Article XV. Standing Rules</a>
            </nav>
          </details>
        </div>
      </section>

      {/* Bylaws Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6 lg:p-10">
            
            {/* Header */}
            <div className="text-center mb-12 pb-8 border-b border-border">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
                BYLAWS OF THE WESTFIELD PARENT TEACHER ORGANIZATION
              </h2>
              <p className="mt-2 text-muted">Robins, Iowa</p>
            </div>

            <div className="prose prose-lg max-w-none">
              
              {/* Article I */}
              <article id="article-i" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE I. Name
                </h3>
                <p className="text-muted leading-relaxed">
                  The name of this organization shall be Westfield Parent Teacher Organization, herein after sometimes called the &quot;PTO&quot; or the &quot;organization&quot;.
                </p>
              </article>

              {/* Article II */}
              <article id="article-ii" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE II. Purposes
                </h3>
                
                <p className="text-muted leading-relaxed mb-4"><strong>Section 1.</strong> The objects of this PTO are:</p>
                <ol className="list-[lower-alpha] pl-6 text-muted space-y-2 mb-4">
                  <li>To promote the welfare of children and youth in home, school, and community;</li>
                  <li>To raise the standards of home life;</li>
                  <li>To bring into closer relation the home and school, that parents, and teachers may cooperate in the education of children and youth;</li>
                  <li>To develop between educators and the general public such united efforts as will secure for all children and youth the highest advantages in physical, mental, and social education.</li>
                </ol>
                
                <p className="text-muted leading-relaxed mb-4">
                  <strong>Section 2.</strong> The objects of the Westfield PTO are promoted through an educational program directed toward parents, teachers, students and the general public; are developed through conferences, committees, projects, and programs; are governed and qualified by the basic policies set forth in Article III.
                </p>
                
                <p className="text-muted leading-relaxed">
                  <strong>Section 3.</strong> The organization is organized exclusively for charitable, scientific, literary or educational purposes within the meaning of Section 501(c)(3) of the Internal Revenue Code, or corresponding section of any future Federal tax code (herein after &quot;Internal Revenue Code&quot;).
                </p>
              </article>

              {/* Article III */}
              <article id="article-iii" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE III. Basic Policies
                </h3>
                
                <p className="text-muted leading-relaxed mb-4"><strong>Section 1.</strong> The following are basic policies of Westfield PTO:</p>
                <ol className="list-[lower-alpha] pl-6 text-muted space-y-3">
                  <li>The organization shall be noncommercial, nonsectarian, and nonpartisan.</li>
                  <li>The name of the organization or the names of any members in their official capacities shall not be used to endorse or promote a commercial concern or in connection with any partisan interest or for any purpose not appropriately related to promotion of the Objects of the organization.</li>
                  <li>The organization shall not directly or indirectly participate or intervene (in any way, including the publishing or distributing of statements) in any political campaign on behalf of, or in opposition to, any candidate for public office.</li>
                  <li>The organization shall work with schools to provide quality education for all children and youth and shall seek to participate in the decision-making process establishing school policy, recognizing that the legal responsibility to make decisions has been delegated by the people to boards of election.</li>
                  <li>No part of the net earnings of the organization shall inure to the benefit of, or be distributable to its members, directors, trustees, officers, or other private persons except that the organization shall be authorized and empowered to pay reasonable compensation for services rendered and to make payments and distributions in furtherance of the purposes set forth in Article II hereof.</li>
                  <li>Notwithstanding any other provision of these articles, the organization shall not carry on any other activities not permitted to be carried on (i) by an organization exempt from Federal income tax under Section 501(c)(3) of the Internal Revenue Code, or (ii) by an organization, contributors to which are deductible under Section 170(c)(2) of the Internal Revenue Code.</li>
                  <li>Upon dissolution of this organization, after paying or adequately providing for the debts and obligations of the organization, the remaining assets shall be distributed to (i) one or more Linn-Mar public schools, if Linn-Mar public schools cease to exist, assets may be distributed to (ii) one or more of any public schools, nonprofit funds, foundation, or organizations which have established their tax exempt status under Section 501(c)(3) of the Internal Revenue Code. If there are tangible assets, other than funds, in the organization&apos;s possession at the time of the dissolution, these tangible assets may be sold at a fair market value and the funds from these sold assets be distributed per Article III(g)(i) and (ii).</li>
                </ol>
              </article>

              {/* Article IV */}
              <article id="article-iv" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE IV. Membership and Dues
                </h3>
                <p className="text-muted leading-relaxed">
                  The membership is open to all staff, teachers, parents and guardians of all students currently enrolled at Westfield Elementary School. Membership shall be made available to any of these individuals who subscribe to the Objects and basic policies of this PTO. There are no dues required of any members.
                </p>
              </article>

              {/* Article V */}
              <article id="article-v" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE V. Officers and their Election
                </h3>
                
                <p className="text-muted leading-relaxed mb-4"><strong>Section 1.</strong> Officers and their Election:</p>
                <ol className="list-[lower-alpha] pl-6 text-muted space-y-2 mb-4">
                  <li>The officers of this organization shall be president, vice-president, secretary, and treasurer.</li>
                  <li>These officers shall be elected annually in the month of April, by secret ballot if deemed necessary by the Executive committee.</li>
                  <li>Officers shall assume their Official duties on the first day of the summer break immediately following their April election.</li>
                  <li>No person shall serve more than two consecutive terms in the same office.</li>
                </ol>
                
                <p className="text-muted leading-relaxed mb-4">
                  <strong>Section 2.</strong> Nominations for officers shall be accepted from the floor at the April meeting.
                </p>
                
                <p className="text-muted leading-relaxed">
                  <strong>Section 3.</strong> A vacancy occurring in the office of vice-president, secretary or treasurer shall be filled by a majority vote of the remaining members of the leadership committee. If a vacancy occurs in the office of president, the vice-president shall serve as president until the end of the current term.
                </p>
              </article>

              {/* Article VI */}
              <article id="article-vi" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE VI. Duties of Officers
                </h3>
                
                <p className="text-muted leading-relaxed mb-2"><strong>Section 1.</strong> The president shall:</p>
                <ol className="list-[lower-alpha] pl-6 text-muted space-y-1 mb-4">
                  <li>Preside at all regular and special meetings of the organization, and of the leadership committee.</li>
                  <li>Shall be a member ex officio of all committees.</li>
                  <li>Shall perform such other duties as may be prescribed in these Bylaws or assigned to him/her by the organization or by the leadership committee.</li>
                  <li>Appoint the chairs of all standing committees.</li>
                  <li>Create other special committees, designate their chairs and assign their duties.</li>
                </ol>
                
                <p className="text-muted leading-relaxed mb-2"><strong>Section 2.</strong> The vice-president shall:</p>
                <ol className="list-[lower-alpha] pl-6 text-muted space-y-1 mb-4">
                  <li>Perform all duties of the president in the president&apos;s absence.</li>
                  <li>Assist the president with tasks or projects as requested by the president.</li>
                </ol>
                
                <p className="text-muted leading-relaxed mb-2"><strong>Section 3.</strong> The secretary shall:</p>
                <ol className="list-[lower-alpha] pl-6 text-muted space-y-1 mb-4">
                  <li>Keep accurate record of all meetings of the organization and leadership committee.</li>
                  <li>Prepare the agenda for all regular meetings, special meetings, executive committee meetings, and leadership meetings as directed by the PTO chairperson(s).</li>
                  <li>Shall perform such other duties as may be delegated to him/her by the president.</li>
                </ol>
                
                <p className="text-muted leading-relaxed mb-2"><strong>Section 4.</strong> The treasurer shall:</p>
                <ol className="list-[lower-alpha] pl-6 text-muted space-y-1 mb-4">
                  <li>Keep an accurate record of receipts and expenditures. This includes charging the appropriate line items of the budget.</li>
                  <li>Maintain all of the organization&apos;s banking accounts.</li>
                  <li>Disperse funds only as authorized by the organization.</li>
                  <li>Present a statement of account at every meeting of the organization and at other times when requested by the executive committee, leadership committee, or president.</li>
                  <li>Shall have the account and all financial records, including but not limited to receipts of expenses and bank statements, available for examination by the president and/or vice-president in September, November, and March.</li>
                  <li>Shall have account examined annually in April or May by an auditor or an auditing committee of not less than two members who, satisfied that the treasurer&apos;s annual report is correct, shall sign a statement of that fact at the end of the report. The auditing committee shall be appointed by the executive committee by the March meeting.</li>
                </ol>
                
                <p className="text-muted leading-relaxed mb-2"><strong>Section 5.</strong> All Officers shall:</p>
                <ol className="list-[lower-alpha] pl-6 text-muted space-y-1">
                  <li>Perform the duties prescribed in the parliamentary authority (Article XII) in addition to those outlined in these Bylaws and those assigned from time to time;</li>
                  <li>Deliver to successors any and all materials relating to said office within 30 days following the meeting at which the successors are installed.</li>
                  <li>Attend all regular meetings of the organization. In the event of an absence, officers must give notice to a member of the Executive Committee. If an officer has more than two (2) absences, the remaining Executive Committee may vote, by a simple majority, to remove said officer from office.</li>
                </ol>
              </article>

              {/* Article VII */}
              <article id="article-vii" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE VII. Executive Committee
                </h3>
                
                <p className="text-muted leading-relaxed mb-4">
                  <strong>Section 1.</strong> The Executive committee shall consist of the officers of the organization and the principal of the school or a representative appointed by him/her.
                </p>
                
                <p className="text-muted leading-relaxed mb-2"><strong>Section 2.</strong> The duties of the Executive committee shall be:</p>
                <ol className="list-[lower-alpha] pl-6 text-muted space-y-1 mb-4">
                  <li>To transact necessary business in the intervals between organization meetings and such other business as may be referred to it by the organization;</li>
                  <li>To appoint an auditor or auditing committee by March so to audit the financial records by the annual meeting in May.</li>
                  <li>To prepare and submit to the organization for adoption a budget for the next year.</li>
                </ol>
                
                <p className="text-muted leading-relaxed">
                  <strong>Section 3.</strong> The Executive committee shall meet as deemed necessary to prepare for the upcoming regular and special meetings.
                </p>
              </article>

              {/* Article VIII */}
              <article id="article-viii" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE VIII. Leadership Committee
                </h3>
                
                <p className="text-muted leading-relaxed mb-4">
                  <strong>Section 1.</strong> The Leadership committee shall consist of the Executive Committee and the chairpersons of the committees. Each committee chairperson or coordinator reports to the Executive committee.
                </p>
                
                <p className="text-muted leading-relaxed mb-4">
                  <strong>Section 2.</strong> Each chairperson shall coordinate and supervise the business of the committees and programs within their jurisdiction, formulate policy proposals and make recommendations to the Executive committee and the general membership.
                </p>
                
                <p className="text-muted leading-relaxed">
                  <strong>Section 3.</strong> There shall be a minimum of two meetings of the leadership committee each fiscal year: one, an organizational meeting, no later than September, and one in May. Additional meetings may be held at the discretion of the officers for purpose of conducting business and for program purposes.
                </p>
              </article>

              {/* Article IX */}
              <article id="article-ix" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE IX. Meetings
                </h3>
                
                <p className="text-muted leading-relaxed mb-4">
                  <strong>Section 1.</strong> At least six (6) regular meetings of the organization shall be held during the school year. Dates of meetings shall be determined by the Executive committee and notification given to members with a minimum of three (3) days notice.
                </p>
                
                <p className="text-muted leading-relaxed mb-4">
                  <strong>Section 2.</strong> Special meeting of the organization may be called by the president, a majority of the leadership committee, or a majority of the executive committee with three (3) days notice being given to the membership.
                </p>
                
                <p className="text-muted leading-relaxed mb-4">
                  <strong>Section 3.</strong> The election meeting shall be held in April.
                </p>
                
                <p className="text-muted leading-relaxed mb-4">
                  <strong>Section 4.</strong> Four (4) members shall constitute a quorum for the transaction of business in any meeting of this organization.
                </p>
                
                <p className="text-muted leading-relaxed mb-4">
                  <strong>Section 5.</strong> Proposals for &quot;school funding requests&quot; shall be presented at a regular meeting and may or may not be voted upon at that meeting. This decision shall be left up to the quorum of members present at the meeting where the proposal is made. These Bylaws do not prohibit a special meeting being called for the purpose of voting on a proposal for &quot;school funding request(s)&quot;.
                </p>
                
                <p className="text-muted leading-relaxed">
                  <strong>Section 6.</strong> In order for a vote to pass, all motions must be approved by a majority of those present. This section does not apply to amendments to the by-laws. See Article XIII for bylaw amendments voting requirements.
                </p>
              </article>

              {/* Article X */}
              <article id="article-x" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE X. Committees
                </h3>
                
                <p className="text-muted leading-relaxed mb-4">
                  <strong>Section 1.</strong> Such standing committees shall be created by the president and/or the executive committee as may be required to promote the objects and interest of the organization. The chairpersons of the standing committees shall be appointed by the president of the organization. Their term of office shall be one year.
                </p>
                
                <p className="text-muted leading-relaxed">
                  <strong>Section 2.</strong> Special committees may be appointed by the president or executive committee when such committees are deemed necessary by the president and/or executive committee. Since a special committee is created and appointed for a specific purpose it automatically goes out of existence when its work is done and its final report is accepted.
                </p>
              </article>

              {/* Article XI */}
              <article id="article-xi" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE XI. Finances
                </h3>
                
                <p className="text-muted leading-relaxed mb-4">
                  <strong>Section 1.</strong> The fiscal year of the organization shall begin on July 1st and end on the following June 30th.
                </p>
                
                <p className="text-muted leading-relaxed">
                  <strong>Section 2.</strong> Members shall present to the treasurer receipts to be considered for reimbursement by the treasury in a timely manner: within three (3) months after the date of purchase/occurrence, or by the end of the fiscal year on June 30th, whichever date comes first.
                </p>
              </article>

              {/* Article XII */}
              <article id="article-xii" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE XII. Parliamentary Authority
                </h3>
                
                <p className="text-muted leading-relaxed">
                  <strong>Section 1.</strong> Robert&apos;s Rules of Order, Newly Revised, shall be the parliamentary authority for all matters of procedure not specifically covered by these Bylaws or other specific rules of procedure adopted by the organization.
                </p>
              </article>

              {/* Article XIII */}
              <article id="article-xiii" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE XIII. Amendments
                </h3>
                
                <p className="text-muted leading-relaxed">
                  <strong>Section 1.</strong> These Bylaws may be amended at a scheduled meeting of the organization by a two-thirds (2/3) vote of the members present and voting, provided that notice of an amendment vote shall be given the membership in writing at least three (3) days prior to the meeting at which the amendment shall be voted upon.
                </p>
              </article>

              {/* Article XIV */}
              <article id="article-xiv" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE XIV. Committees
                </h3>
                
                <p className="text-muted leading-relaxed mb-4">
                  <strong>Section 1.</strong> The Executive Committee, in cooperation with the incoming Executive Committee, chooses the committees for the organization in April or as needed throughout the year.
                </p>
                
                <p className="text-muted leading-relaxed">
                  <strong>Section 2.</strong> The Executive Committee, in cooperation with the incoming Executive Committee, chooses the committee chairs or coordinators for the organization in April, or as needed throughout the year.
                </p>
              </article>

              {/* Article XV - Standing Rules */}
              <article id="article-xv" className="scroll-mt-40 mb-10">
                <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
                  ARTICLE XV. Standing Rules
                </h3>
                
                <p className="text-muted leading-relaxed mb-4">
                  Standing Rules may be adopted, amended, rescinded or suspended by a majority vote of the Executive committee.
                </p>
                
                <p className="text-muted leading-relaxed mb-6">
                  Standing Rules are the procedures and details of administration implementing and clarifying the Bylaws. They shall be in harmony with the Bylaws and shall be binding on all members.
                </p>

                {/* Rule I */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-foreground mb-4">Rule I. General/Administration</h4>
                  <ol className="list-decimal pl-6 text-muted space-y-3">
                    <li>Any changes in the Standing Rules shall be brought to the attention of the membership at the next general meeting. When a Standing Rule restricts, adds obligation and/or responsibility to the individual member, it shall require the approval of 2/3 vote of the general membership.</li>
                    <li>Information pertaining to fund raisers, projects, or other items considered confidential shall not be provided to individuals or organizations which potentially could be in direct competition with the interests of the PTO.</li>
                    <li>No information, either written or verbal, concerning the PTO shall be released to any media communications without the consent of either the president or vice-president. Unless otherwise specified, they are the official spokespersons for the PTO.</li>
                    <li>It is the responsibility of the Executive committee to retain professional service or advice for the PTO.</li>
                    <li>All Officer and Committee job descriptions will be updated yearly. They shall explain thoroughly the duties of the Chair and current activities of the committees/officers they cover in order to allow for the best possible continuity from year to year.</li>
                    <li>
                      Assistants to Committee Chairs:
                      <ol className="list-[upper-alpha] pl-6 mt-2">
                        <li>Should a committee not have a designated assistant chair, the Chair of the committee can appoint a representative to serve as committee Chair in the event of the absence of the committee Chair.</li>
                      </ol>
                    </li>
                    <li>
                      Administrative role of the PTO President:
                      <ol className="list-[upper-alpha] pl-6 mt-2 space-y-1">
                        <li>The president is an ex-officio member, with the right to vote.</li>
                        <li>The president shall not be expected to attend all committee meetings, but she/he may wish to attend committee meetings when major decisions are being made.</li>
                      </ol>
                    </li>
                  </ol>
                </div>

                {/* Rule II */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-foreground mb-4">Rule II. Responsibilities of Committee Chairs</h4>
                  <ol className="list-decimal pl-6 text-muted space-y-3">
                    <li>In the event Committee Chairs would like agenda time at a meeting, notice must be given to the PTO president prior to the Executive Committee.</li>
                    <li>Committee chairs shall record all donations received and submit record to the executive committee.</li>
                    <li>Committee chairs shall submit a final report to the Executive committee no later than June 1st. That final report shall include a description of what their committee&apos;s duties were and what recommendations the chair has to improve the fundraiser/event.</li>
                    <li>Committee chairs shall assist in finding their replacement(s) at the conclusion of their service.</li>
                  </ol>
                </div>

                {/* Rule III */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4">Rule III. Financial Procedures</h4>
                  <ol className="list-decimal pl-6 text-muted space-y-3">
                    <li>
                      A budget overrun is an expenditure of budget money beyond the predicted expenses.
                      <ol className="list-[upper-alpha] pl-6 mt-2 space-y-1">
                        <li>Total budget overruns less than $100 shall be approved by the Executive committee.</li>
                        <li>Total budget overruns in excess of $100 shall be approved by the membership at the next regularly scheduled PTO meeting.</li>
                      </ol>
                    </li>
                    <li>
                      An unbudgeted expense is a new item.
                      <ol className="list-[upper-alpha] pl-6 mt-2 space-y-1">
                        <li>Unbudgeted expenses of any amount shall be approved by the Executive committee.</li>
                        <li>Unbudgeted expenses in excess of $100 shall be approved by the general membership at the next scheduled meeting.</li>
                        <li>The executive committee can re-direct a budgeted expense if the district prohibits the purchase or the item(s) is no longer available. The Executive Committee shall re-direct the expense to items that are in the same category of the intended purchase. The general membership should be notified at the next meeting of such a change.</li>
                      </ol>
                    </li>
                    <li>
                      Committee funds shall be used solely for the attainment of the committee&apos;s goals and objectives.
                      <ol className="list-[upper-alpha] pl-6 mt-2 space-y-1">
                        <li>Committee funds shall not be used for the purchase of gifts for the PTO members unless prior approval has been given by the Executive committee.</li>
                        <li>Committee funds may be used for gifts or honorariums for guest speakers.</li>
                      </ol>
                    </li>
                    <li>All funds, cash, check or otherwise, need to be deposited in the appropriate PTO account within 30 days of receipt.</li>
                    <li>The treasurer, president, vice-president, Scrip chairperson and any other PTO member given prior approval by the Executive committee may deposit funds into the appropriate PTO accounts.</li>
                    <li>The president and the treasurer shall be authorized to transact business on all PTO banking accounts and must sign all signature cards.</li>
                    <li>The change of names on the PTO banking accounts signature cards shall be made by July 1st, as needed.</li>
                    <li>All requests for reimbursements or payment, must be made on the appropriate form. Such form shall require a signature of approval of one of the president before any payment will be made. If the current committee chair of the committee for which a payment will be expensed against would like to approve all payments, he/she may do so as long as he/she has given timely notice of this requested procedure to the treasurer, the president and his/her committee members.</li>
                    <li>The Executive committee has the authority to expense for program items not specifically listed in the budget as long as they meet the goals and purposes of the PTO organization and funds are available to do so.</li>
                    <li>On the first of each month or business day closest to the first of each month from October through June, the Scrip Chairperson will be responsible for having Scrip profits from the previous month less anticipated funds needed for the upcoming month transferred from the Scrip banking account to the general banking account. These funds will be deposited to the general account line item &quot;Income/Scrip&quot;.</li>
                  </ol>
                </div>
              </article>

              {/* Adoption Statement */}
              <div className="mt-12 pt-8 border-t border-border text-center">
                <p className="text-muted italic mb-6">
                  THE FOREGOING BYLAWS WERE APPROVED AND ADOPTED BY THE GENERAL MEMBERSHIP OF THE WESTFIELD PARENT TEACHER ORGANIZATION AT A MEETING HELD IN ROBINS, IOWA ON NOVEMBER 8, 2011.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-8 text-muted">
                  <div>
                    <p className="font-semibold text-foreground">Beth Malicki Papendick</p>
                    <p className="text-sm">PTO President</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Melissa Muszynski</p>
                    <p className="text-sm">PTO Vice-President</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-12 lg:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-playfair)]">
            Download the Official Document
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Get a PDF copy of the Westfield PTO Bylaws and Standing Rules for your records.
          </p>
          <a
            href="/Westfield-PTO-Bylaws-and-Standing-Rules.pdf"
            download
            className="inline-flex items-center justify-center gap-2 mt-6 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </div>
      </section>
    </div>
  );
}
