import React from "react";

const Page7 = ({ items }) => {
  /*const Items = items.filter(item => {
    if (
      item.status == "Derogatory" ||
      item.accountType == "collections " ||
      item.accountType == "charge-off"
    )
      return item;
  });*/
  return (
    <div style={{ pageBreakBefore: "always", marginTop: "100px" }}>
      <p>
        <strong>PART 3 - ANALYSIS OF YOUR ACCOUNTS</strong>
      </p>
      <p style={{ marginTop: "20px" }}>
        <strong>Your Derogatory Items:</strong>
      </p>
      <p>
        You have{" "}
        <span>
          <strong>{items.length}</strong>
        </span>{" "}
        items marked as delinquent or derogatory. Recent late payments,
        collections, and other derogatory items within the last six months will
        hurt your credit score more than older inactive accounts. Accounts
        within the last 24 months carry the second most weight. This is why it
        is crucial to pay all bills on time and do not miss any payments.
      </p>

      <div>
        <table
          style={{
            width: "100%",
            border: "2px solid #D44247",
            borderCollapse: "collapse",
          }}
        >
          <tr
            style={{
              backgroundColor: "#FBB0C1 !important",
              webkitPrintColorAdjust: "exact",
            }}
          >
            <th style={{ width: "25%", padding: "5px" }}>Creditor/Furnisher</th>
            <th style={{ width: "10%", padding: "5px" }}>Equifax</th>
            <th style={{ width: "10%", padding: "5px" }}>Experian</th>
            <th style={{ width: "10%", padding: "5px" }}>Transunion</th>
            <th
              style={{
                width: "45%",
                padding: "5px",
                border: "1.5px solid #D44247",
              }}
            >
              Issue
            </th>
          </tr>
          {items != null &&
            items.length > 0 &&
            items.map(item => (
              <tr
                style={{
                  backgroundColor: "#ffffff !important",
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
                  {item.creditor}{" "}
                </td>
                <td
                  style={{
                    width: "10%",
                    padding: "5px",
                    border: "1.5px solid #D44247",
                  }}
                >
                  11/13{" "}
                </td>
                <td
                  style={{
                    width: "10%",
                    padding: "5px",
                    border: "1.5px solid #D44247",
                  }}
                >
                  11/13
                </td>
                <td
                  style={{
                    width: "10%",
                    padding: "5px",
                    border: "1.5px solid #D44247",
                  }}
                >
                  11/13{" "}
                </td>
                <td
                  style={{
                    width: "45%",
                    padding: "5px",
                    border: "1.5px solid #D44247",
                  }}
                >
                  Was 90 days late 1 time(s).
                </td>
              </tr>
            ))}
          <tr
            style={{
              backgroundColor: "#FBB0C1 !important",
              webkitPrintColorAdjust: "exact",
            }}
          >
            <td
              colspan='5'
              style={{
                width: "100%",
                height: "16px",
                padding: "5px",
                border: "1px solid #D44247",
              }}
            >
              {" "}
            </td>
          </tr>
        </table>
      </div>

      <p style={{ marginTop: "20px" }}>
        <strong>Your Public Records:</strong>
      </p>
      <p>
        You have <strong>zero</strong> public records. Public records include
        details of court records, bankruptcy filings, tax liens and monetary
        judgments. These generally remain on your Credit Report for 7 to 10
        years.
      </p>

      <div>
        <table
          style={{
            width: "100%",
            border: "2px solid #000000",
            borderCollapse: "collapse",
          }}
        >
          <tr
            style={{
              backgroundColor: "#ececec !important",
              webkitPrintColorAdjust: "exact",
            }}
          >
            <th style={{ width: "25%", padding: "5px" }}>Creditor/Furnisher</th>
            <th style={{ width: "10%", padding: "5px" }}>Equifax</th>
            <th style={{ width: "10%", padding: "5px" }}>Experian</th>
            <th style={{ width: "10%", padding: "5px" }}>Transunion</th>
            <th
              style={{
                width: "45%",
                padding: "5px",
                border: "1.5px solid #000000",
              }}
            >
              Issue
            </th>
          </tr>
          <tr
            style={{
              backgroundColor: "#ffffff !important",
              webkitPrintColorAdjust: "exact",
              textAlign: "center",
            }}
          >
            <td style={{ width: "100%" }}>No Record Found.</td>

            {/*  <!--If there is Records, delete this comments-->
                    <!--
                    <td style={{width: 25%,padding: 5px,border:1.5px solid #000000}}>TD BANK N.A. </td>
                    <td style={{width: "10%",padding: 5px,border:1.5px solid #000000}}>11/13 </td>
                    <td style={{width: "10%",padding: 5px,border:1.5px solid #000000}}>11/13</td>
                    <td style={{width: "10%",padding: 5px,border:1.5px solid #000000}}>11/13 </td>
                    <td style={{width: 45%,padding: 5px,border:1.5px solid #000000}}>Was 90 days late 1 time(s).
                    </td>
                    -->*/}
          </tr>
          <tr
            style={{
              backgroundColor: "#ececec !important",
              webkitPrintColorAdjust: "exact",
            }}
          >
            <td
              colspan='5'
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

      <p style={{ marginTop: "20px" }}>
        <strong>Your Inquiries:</strong>
      </p>
      <p>
        You have <strong>1</strong> inquiries on your reports. Each time you
        apply for credit it lowers your score. For that reason we ask during
        credit repair that you <u>do not apply for anything.</u>
      </p>

      <div>
        <table
          style={{
            width: "100%",
            border: "2px solid #4CD7D0",
            borderCollapse: "collapse",
          }}
        >
          <tr
            style={{
              backgroundColor: "#A4E8E0 !important",
              webkitPrintColorAdjust: "exact",
            }}
          >
            <th style={{ width: "25%", padding: "5px" }}>Creditor/Furnisher</th>
            <th style={{ width: "10%", padding: "5px" }}>Equifax</th>
            <th style={{ width: "10%", padding: "5px" }}>Experian</th>
            <th style={{ width: "10%", padding: "5px" }}>Transunion</th>
            <th
              style={{
                width: "45%",
                padding: "5px",
                border: "1.5px solid #4CD7D0",
              }}
            >
              Issue
            </th>
          </tr>
          <tr
            style={{
              backgroundColor: "#ffffff !important",
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
              CLEAR CHOICE
            </td>
            <td
              style={{
                width: "10%",
                padding: "5px",
                border: "1.5px solid #4CD7D0",
              }}
            >
              {" "}
            </td>
            <td
              style={{
                width: "10%",
                padding: "5px",
                border: "1.5px solid #4CD7D0",
              }}
            ></td>
            <td
              style={{
                width: "10%",
                padding: "5px",
                border: "1.5px solid #4CD7D0",
              }}
            >
              12/17
            </td>
            <td
              style={{
                width: "45%",
                padding: "5px",
                border: "1.5px solid #4CD7D0",
              }}
            >
              Inquiry
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "#A4E8E0 !important",
              webkitPrintColorAdjust: "exact",
            }}
          >
            <td
              colspan='5'
              style={{
                width: "100%",
                height: "16px",
                padding: "5px",
                border: "1px solid #4CD7D0",
              }}
            >
              {" "}
            </td>
          </tr>
        </table>
      </div>
      <p>
        <strong>
          We Are Experts In Disputing Errors On Your Report That Lower Your
          Score.
        </strong>
      </p>
      <p>
        While we cannot promise to remove all of your negative items on your
        report, we do know how to use the law in your favor and we have an
        awesome track record.
      </p>
    </div>
  );
};

export default Page7;
