import React from "react";

const Page6 = () => {
  return (
    <div style={{ pageBreakBefore: "always", marginTop: "100px" }}>
      <p>
        <strong>PART 2 - YOUR CREDIT SCORES AND SUMMARY</strong>
      </p>
      <p>
        We have analyzed your credit reports from the three major bureaus. Here
        are our findings:
      </p>
      <p>
        <strong>Your Credit Scores:</strong>
      </p>

      <div>
        <table style={{ width: "100%" }}>
          <tr
            style={{
              backgroundColor: "#ffffff !important",
              webkitPrintColorAdjust: "exact",
              textAlign: "center",
              fontSize: "22px",
            }}
          >
            <th style={{ width: "33.33%", padding: "5px" }}>EQUIFAX</th>
            <th style={{ width: "33.33%", padding: "5px" }}>EXPERIAN</th>
            <th style={{ width: "33.33%", padding: "5px" }}>TRANSUNION</th>
          </tr>

          <tr
            style={{
              backgroundColor: "#ffffff !important",
              webkitPrintColorAdjust: "exact",
              textAlign: "center",
              fontSize: "40px",
            }}
          >
            <td style={{ width: "33.33%", padding: "5px" }}>677</td>
            <td style={{ width: "33.33%", padding: "5px" }}>668</td>
            <td style={{ width: "33.33%", padding: "5px" }}>663</td>
          </tr>
        </table>
      </div>

      <p style={{ textAlign: "center" }}>
        These scores were reported by IdentityIQ on 03/15/2018
      </p>

      <p style={{ margin: "20px" }}>
        <strong>
          Keep Your Credit Monitoring Account Active Throughout The Credit
          Repair Process
        </strong>
      </p>
      <p>
        Your credit scores may vary depending on where you get your credit
        reports from, because different sources have different methods for
        determining your score and scheduling updates. Maintaining one (1)
        credit monitoring account will give us a baseline score as a point of
        reference to grow from, to accurately see changes as they happen. For
        this reason, you must keep your same credit monitoring account active,
        rather than checking your scores on multiple sites that will differ.
      </p>

      <p style={{ marginTop: "40px" }}>
        <strong>Your Derogatory Summary:</strong>
      </p>
      <p>
        Next we analyzed all the items on your reports, to determine which
        accounts are negatively impacting your score. Here are our findings:
      </p>

      <div>
        <table
          style={{
            width: "100%",
            border: "1.5px solid black",
            borderCollapse: "collapse",
          }}
        >
          <tr
            style={{
              backgroundColor: "#ececec !important",
              webkitPrintColorAdjust: "exact",
            }}
          >
            <th
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #000000",
              }}
            ></th>
            <th
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #000000",
              }}
            >
              EQUIFAX
            </th>
            <th
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #000000",
              }}
            >
              EXPERIAN
            </th>
            <th
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #000000",
              }}
            >
              TRANSUNION
            </th>
          </tr>
          <tr
            style={{
              backgroundColor: "#FBB0C1 !important",
              webkitPrintColorAdjust: "exact",
              textAlign: "center",
            }}
          >
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              Delinquent
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              0
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              0
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              0
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "#FBB0C1 !important",
              webkitPrintColorAdjust: "exact",
              textAlign: "center",
            }}
          >
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              Derogatory:
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              1
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              1
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              1
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "#FBB0C1 !important",
              webkitPrintColorAdjust: "exact",
              textAlign: "center",
            }}
          >
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              Collection:
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              0
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              0
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              0
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: " #FBB0C1 !important",
              webkitPrintColorAdjust: "exact",
              textAlign: "center",
            }}
          >
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              Public Records:
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              0
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              0
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              0
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "#A4E8E0 !important",
              webkitPrintColorAdjust: "exact",
              textAlign: "center",
            }}
          >
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #4CD7D0",
              }}
            >
              Inquiries(2 years):
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #4CD7D0",
              }}
            >
              0
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #4CD7D0",
              }}
            >
              0
            </td>
            <td
              style={{
                width: "25%",
                padding: "5px",
                border: "1.5px solid #4CD7D0",
              }}
            >
              3
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "#ececec !important",
              webkitPrintColorAdjust: "exact",
            }}
          >
            <td
              colspan='4'
              style={{
                width: "100%",
                height: "16px",
                padding: "5px",
                border: "1px solid #000000",
              }}
            >
              {" "}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Page6;
