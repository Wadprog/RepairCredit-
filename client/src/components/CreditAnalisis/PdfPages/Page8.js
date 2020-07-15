import React from "react";

const Page8 = () => {
  return (
    <div style={{ pageBreakBefore: "always", marginTop: "100px" }}>
      <p>
        <strong>Credit Utilization:</strong>
      </p>
      <div>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <tr
            style={{backgroundColor: "#ffffff !important",
                    webkitPrintColorAdjust: "exact"}}
          >
            <th style={{width: "25%",padding:"5px"}}></th>
            <th style={{width: "25%",padding:"5px",borderBottom:"1px solid #e4e3e3"}}>
              TRANSUNION
            </th>
            <th style={{width: "25%",padding:"5px",borderBottom:"1px solid #e4e3e3"}}>
              EQUIFAX
            </th>
            <th style={{width: "25%",padding:"5px",borderBottom:"1px solid #e4e3e3"}}>
              EXPERIAN
            </th>
          </tr>
          <tr
            style={{backgroundColor: "#ffffff !important",
                    webkitPrintColorAdjust: "exact",textAlign: "center",borderBottom:"2px solid #e4e3e3"}}
          >
            <td style={{width: "25%",padding:"5px"}}>Credit card limit</td>
            <td style={{width: "25%",padding:"5px"}}>$14,500</td>
            <td style={{width: "25%",padding:"5px"}}>$16,400</td>
            <td style={{width: "25%",padding:"5px"}}>$16,400</td>
          </tr>
          <tr
            style={{backgroundColor: "#ffffff !important",
                    webkitPrintColorAdjust: "exact",textAlign: "center",borderBottom:"2px solid #e4e3e3"}}
          >
            <td style={{width: "25%",padding:"5px"}}>Open credit card debt</td>
            <td style={{width: "25%",padding:"5px"}}>$4,775</td>
            <td style={{width: "25%",padding:"5px"}}>$4,775</td>
            <td style={{width: "25%",padding:"5px"}}>$4,802</td>
          </tr>
          <tr
            style={{backgroundColor: "#ffffff !important",
                    webkitPrintColorAdjust: "exact",textAlign: "center",borderBottom:"2px solid #e4e3e3"}}
          >
            <td style={{width: "25%",padding:"5px"}}></td>
            <td style={{width: "25%",padding:"5px"}}></td>
            <td style={{width: "25%",padding:"5px"}}></td>
            <td style={{width: "25%",padding:"5px"}}></td>
          </tr>
        </table>
      </div>

      <p>
        You have <strong>$15,767</strong> in revolving credit lines and your
        balances average at
        <strong>$4,784</strong> which means that you are utilizing{" "}
        <strong>30%</strong> of your available credit line.
      </p>

      <p>
        <strong>How this impacts your score</strong>
      </p>
      <p>
        The purpose of a credit score is for lenders to determine the likelihood
        that you will repay money you borrow. Therefore, the scoring algorithms
        looks to see that you're not overextended in credit card debt and living
        beyond your means. As a rule of thumb, maxing out your cards will{" "}
        <u>lower</u> your score while showing more available credit will{" "}
        <u>increase</u> your score.
      </p>
      <p>
        Pro tip: If you're carring high balances, a quick trick to increase to
        score is to pay your balances down to below "25%" of the available credit
        limit of each card and never spend any more than that, even if you pay
        the bill off in full each month.
      </p>

      <p>
        <strong>How quickly will I see the changes?</strong>
      </p>
      <p>
        Credit card companies report your balances to the bureaus once per month
        (each on a different day) and your credit reports and scores at the
        credit monitoring company will only update once per month, therefore it
        can take upto two months to see this begin to impact your scores. For
        this reason, it's important to understand that improving your credit
        scores takes time and a commitment to change your daily habits and the
        way you spent money. The good news is that the sooner you can do it, the
        sooner your scores will rise.
      </p>

      <p>
        <strong>Credit Utilization Summary:</strong>
      </p>

      <div>
        <table style={{width:"100%",border:"1px solid #000000",borderCollapse:"collapse"}}>
          <tr
            style={{backgroundColor: "#ececec !important",
                    webkitPrintColorAdjust: "exact",textAlign: "center",border:"1px solid #000000"}}
          >
            <th style={{ width: "25%",padding:" 8px",border:"1px solid #000000"}}></th>
            <th style={{width: "25%",padding:" 8px",border:"1px solid #000000"}}>
              EQUIFAX
            </th>
            <th style={{width: "25%",padding:" 8px",border:"1px solid #000000"}}>
              EXPERIAN
            </th>
            <th style={{width: "25%",padding:" 8px",border:"1px solid #000000"}}>
              TRANSUNION
            </th>
          </tr>

          <tr
            style={{backgroundColor: "#ececec !important",
                    webkitPrintColorAdjust: "exact",textAlign: "center",border:"1px solid #000000"}}
          >
            <td style={{width: "25%",padding: "5px",border:"1px solid #000000"}}>
              <strong>Credit Summary </strong>
            </td>
            <td colspan='3' style={{width: "75%",padding: "5px",textAlign: "left"}}>
              An overview credit status including open and closed accounts and
              balance information
            </td>
          </tr>

          <tr
            style={{backgroundColor: "#ffffff !important",
                    webkitPrintColorAdjust: "exact",textAlign: "center",border:"1px solid #000000"}}
          >
            <td style={{width: "25%",padding: "5px",border:"1px solid #000000",textAlign: "left"}}>
              Total Accounts:
            </td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>
              21
            </td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>
              21
            </td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>
              21
            </td>
          </tr>

          <tr
            style={{backgroundColor: "#ffffff !important",
                    webkitPrintColorAdjust: "exact",textAlign: "center",border:"1px solid #000000"}}
          >
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000",textAlign: "left"}}>
              Open Accounts
            </td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>
              12
            </td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>
              12
            </td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>
              10
            </td>
          </tr>

          <tr
            style={{backgroundColor: "#ffffff !important",
                    webkitPrintColorAdjust: "exact",textAlign: "center",border:"1px solid #000000"}}
          >
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000",textAlign: "left"}}>
              Closed Accounts:
            </td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>9</td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>9</td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>
              11
            </td>
          </tr>

          <tr
            style={{backgroundColor: "#ffffff !important",
                    webkitPrintColorAdjust: "exact",textAlign: "center",border:"1px solid #000000"}}
          >
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000",textAlign: "left"}}>
              Balances:
            </td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>
              $169,439.00
            </td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>
              $169,965.00
            </td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>
              $169,439.00
            </td>
          </tr>

          <tr
            style={{backgroundColor: "#ffffff !important",
                    webkitPrintColorAdjust: "exact",textAlign: "center",border:"1px solid #000000"}}
          >
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000",textAlign: "left"}}>
              Payments:
            </td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>
              $1,855.00
            </td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>
              $1,927.00
            </td>
            <td style={{width: "25%",padding:"5px",border:"1px solid #000000"}}>
              $1,855.00
            </td>
          </tr>

          <tr
            style={{backgroundColor:"#ececec !important",
                    webkitPrintColorAdjust: "exact",textAlign: "center",border:"1px solid #000000"}}
          >
            <td colspan='4' style={{width: "25%",padding:"5px",height: "10px"}}></td>
          </tr>
        </table>
      </div>

      <p>
        <strong>PART 4 - AN OVERVIEW OF OUR PROCESS</strong>
      </p>
      <p>
        <strong>Our plan of action</strong>
      </p>
      <p>
        The credit system is flawed, and nearly 80% of all reports have errors
        that can lower your score. But you have rights and we know how to use
        them to your benefit! The law gives you the right to dispute <u>any</u>
        item on your credit reports. And if those items cannot be verified, they
        must be removed. So we will write many letters to the bureaus. If they
        can't prove it, they must remove it! And we are very good at this!
      </p>

      <p>
        <strong>We Provide Document Preparation And Credit Education</strong>
      </p>
      <p>
        We will be drafting many letters on your behalf to credit bureaus and
        creditors, to challenge the items you wish us to challenge. Along the
        way, we will also guide you how to better manage your credit -- and how
        to keep your awesome credit long after our work is done.
      </p>
    </div>
  )
}

export default Page8;
