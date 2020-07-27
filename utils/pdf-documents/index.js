module.exports = ({ creditItem }) => {
  return `
    <!doctype html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <!-- Google Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <!-- Custom css -->
    <link rel="stylesheet" type="text/css" href="https://printjs-4de6.kxcdn.com/print.min.css">

<style>
.container-pdf {
  position: relative;
  height: 100%;
}

#printElement,
#printButton {
  margin: 30px;
}
.col-sm-4 {
  padding: 10px;
  border: 1px solid grey;
}

.page-break {
  page-break-before: always !important;
}

</style>

    <title>Credit Analisis</title>
</head>

<body style="font-family: Roboto,Arial, Helvetica, sans-serif;">
    <div id="pdf-cover">
        <div class="container-fluid">

            <!--Beginning of cover page-->
            <div style=" margin-top: 300px;">
                <div class="row">
                    <div>
                        <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;" src="/RepairCredit-/utils/pdf-documents/img/oasis.png" />
                    </div>
                </div>
                <div style="margin-top: 10px;text-align: center;">
                    <p style="margin: 0px;"><strong>Credit Analysis Report
                        </strong></p>
                    <p style="margin: 0px;">Prepared for</p>
                    <p style="margin: 0px;"><strong>Carl Cyrius
                        </strong></p>
                    <p style="margin: 0px;">(03/15/2018)</p>
                </div>
                <div style="margin-top: 250px;text-align:center">
                    <p style="margin: 0px;">Prepared by</p>
                    <p style="margin: 0px;">Carl Cyrius</p>
                    <p style="margin: 0px;">The Oasis Firm</p>
                    <p style="margin: 0px;">2701 W Oakland Park Blvd, Suite 410
                    </p>
                    <p style="margin: 0px;">Oakland Park, Florida 33311
                    </p>
                    <p style="margin: 0px;">
                        www.theoasisfirm.com</p>
                    <p style="margin: 0px;">ccyrius@theoasisfirm.com</p>
                    <p style="margin: 0px;">(833) 886-2747
                    </p>
                </div>
            </div>

            <!--Beginning of page 2-->
            <div style="page-break-before:always;margin-top: 100px;">
                <p>
                    <p><strong> Dear Carl Cyrius,</strong></p>
                    <p> On behalf of The Oasis Firm, I'd like to take this opportunity to welcome you as a new client!
                        We
                        are
                        thrilled to
                        have you with us. </p>
                    <p> Credit is our passion. We understand how important your credit is for your future and we will
                        work
                        tirelessly to
                        make sure we are able to help you achieve your financial goals. </p>
                    <p> This credit analysis report provides an overview of your credit as potential lenders see it
                        today.
                        It
                        lists
                        the items
                        that are negatively affecting your score and explains how we use the power of the law to improve
                        your
                        credit. It
                        also includes a simple step-by-step plan for you to speed up the process. </p>
                    <p> This credit analysis report is broken down into the following 5 sections: </p>
                    <ol>
                        <li>
                            Credit Score Basics
                        </li>
                        <li>
                            Your Credit Scores and Summary
                        </li>
                        <li>
                            Analysis of Your Accounts
                        </li>
                        <li>
                            An Overview of Our Process
                        </li>
                        <li>
                            Your Part in the Process
                        </li>
                    </ol>

                    <p> If you have any questions, do not hesitate to reach out. We are always happy to help! You can
                        easily
                        reach
                        us
                        during regular business hours in the following ways: </p>
                    <ul style="list-style: none;">
                        <li> - Email: ccyrius@theoasisfirm.com </li>
                        <li> - Phone: (833) 886-2747 </li>
                        <li> - Website: www.theoasisfirm.com </li>
                    </ul>
                    <p> Carl Cyrius, thank you again for entrusting The Oasis Firm to restore your credit. We are
                        honored to
                        help
                        you
                        achieve your financial goals. </p>
                    <p style="margin-bottom: 0px;"> Best, </p>
                    <p style="margin-top: 0px;"> Carl Cyrius </p>
                </p>
            </div> <!-- // End of page 2-->

            <!--Beginning of page 3-->
            <div style="page-break-before:always;">

                <p><strong>PART 1 - CREDIT SCORE BASICS</strong></p>
                <p style="margin-top: 30px;"><strong>What a Low Credit Score Costs you</strong></p>
                <p>
                    <img style="display: block;
                    margin-left: auto;
                    margin-right: auto;" src="/Credit_Repair/Credit_repair_bot/pages/toyota-camry.jpg" />
            </div>
            </p>

            <p style="text-align: center;margin: 5px;">
                Brand New Toyota Camry
            </p>
            <p style="text-align: center;margin: 5px;">
                $23,000
            </p>
            <p style="text-align: center;margin-top: 5px;">
                66 Month Term
            </p>
            <div style="margin-top: 70px;text-align: center;">
                <p>
                    <span style="margin-right: 100px;">PERSON A</span>
                    <span style="margin-left: 100px;">PERSON B</span>
                </p>
                <p>
                    <span style="margin-right: 100px;">Credit Score: 730 </span>
                    <span style="margin-left: 100px;">Credit Score: 599</span>
                </p>
                <p>
                    <span style="margin-right: 100px;">Interest Rate: 1.99%</span>
                    <span style="margin-left: 100px;">Interest Rate: 14.99%</span>
                </p>
                <p>
                    <span style="margin-right: 100px;">Payment: $368.22</span>
                    <span style="margin-left: 100px;">Payment: $513.97</span>
                </p>
                <p>
                    <span style="margin-right: 100px;">Total Interest Paid $1302.39</span>
                    <span style="margin-left: 100px;">Total Interest Paid $10,921.44</span>
                </p>
                <p>
                    <span style="margin-right: 100px;">Total Payments: $24,302.39</span>
                    <span style="margin-left: 100px;">Total Payments: $33,921.44</span>
                </p>
            </div>
            <div style="margin-top: 70px;text-align: center;">
                <p>Person B pays</p>
                <p style="font: 40px;"><strong>$9,616.05 MORE</strong></p>
                <p>than person A for the exact same car and price!
                </p>
                <p>This same thing happens with your credit cards, mortgage, loans, etc.</p>
                <p style="margin: 0px;">Cleaning up your credit will lower your bills
                </p>
                <p style="margin: 0px;">and can save hundreds of thousands of dollars!</p>
            </div>

        </div><!-- // End of page 3 -->

        <!--Beginning of page 4-->
        <div style="page-break-before:always;">

            <p><strong>What Is A Credit Score?</strong></p>
            <p>
                A credit score is a number generated by a mathematical formula that is meant to predict
                creditworthiness.
                Credit scores range from 300-850. The higher your score is, the more likely you are to get a loan. The
                lower
                your score is, the less likely you are to get a loan. If you have a low credit score and manage to get
                approved
                for credit, your interest rate will be much higher than someone who had a good credit score. So, having
                a high
                credit score will save you many thousands of dollars.
            </p>
            <p><strong>What Is A Credit Bureau?</strong></p>
            <p>
                A credit bureau is a company that collects and maintains your credit information and sells it to
                lenders, creditors
                and consumers in the form of a credit report. There are dozens of credit bureaus, we're most concerned
                with
                the big three: Equifax, Experian, and TransUnion.
            </p>
            <p><strong>How Credit Bureaus Determine your Credit Score</strong></p>
            <p>
                <img src="/Credit_Repair/Credit_repair_bot/pages/img-pdf1.jpg" />
            </p>
            <p>
                The percentages in this chart show how important each of the categories is in determining your credit
                score.
                We will help you to remove negative items from your payment history. We will also show you how to
                maximize
                your debt ratio score, even if paying off credit cards is not an option.
            </p>
            <p><strong>How Your Behavior Is Evaluated In Your Credit Report:</strong></p>
            <p>
                <strong>Do you pay your bills on time?</strong> Payment history is a major factor in credit scoring. If
                you have paid bills late,
                have collections or a bankruptcy, these events won't reflect well in your credit score.
            </p>
            <p>
                <strong>Do you have a long credit history?</strong> Generally speaking, the longer your history of
                holding accounts is, the
                more trusted you will be as a borrower.
            </p>
            <p>
                <strong>Have you applied for credit recently?</strong> If you have many recent inquiries this can be
                construed as being
                negative by the bureaus. Only apply for credit when you really want it.
            </p>
            <p>
                <strong>What is your outstanding debt?</strong> It is important to not use all of your available credit.
                If all of your credit cards
                are maxed out, your scores will reflect that you are not managing your debt wisely.
            </p>

        </div> <!-- // End of page 4 -->

        <!--Beginning of page 5-->
        <div style="page-break-before:always;">

            <p><strong>Credit Score Ranges And Their Meaning
                </strong></p>
            <!--
            <p style="margin: 0px;">
                <span style="background-color: #c0682d !important;
                    -webkit-print-color-adjust: exact;">300-499</span>
            </p>
            <p style="margin: 0px;">
                <span>Fair</span>
            </p>
-->

            <p style="margin-top: 20px;">
                <span><strong>800 and Higher </strong></span>
                <span>(Excellent) With a credit score in this range no
                    lender will ever disapprove your loan
                    application. Additionally, the APR (Annual Percentage Rate) on your credit cards will be the lowest
                    possible.
                    You'll be treated as royalty. Achieving this excellent credit rating not only requires financial
                    knowledge and
                    discipline, but also a good credit history. Generally speaking, to achieve this excellent rating you
                    must also use
                    a substantial amount of credit on an ongoing monthly basis and always repay it ahead of time.</span>
            </p>

            <p style="margin-top: 20px;">
                <span><strong>700 - 799 </strong></span>
                <span> (Very Good) 27% of the United States population belongs to this credit score range. With this
                    credit
                    score range, you will enjoy good rates and approved for nearly any type of credit loan or personal
                    loan, whether
                    unsecured or secured.</span>
            </p>

            <p style="margin-top: 20px;">
                <span><strong>680 - 699 </strong></span>
                <span> (Good) This range is the average credit score. In this range approvals are practically guaranteed
                    but
                    the interest rates might be marginally higher. If you're thinking about a long term loan such as a
                    mortgage, try
                    working to increase your credit score higher than 720 and you will be rewarded for your efforts;
                    your long term
                    savings will be noticeable.</span>
            </p>

            <p style="margin-top: 20px;">
                <span><strong>620 - 679 </strong></span>
                <span> (OK or Fair) Depending on what kind of loan or credit you are applying for and your credit
                    history, you
                    might find that the rates you are quoted aren't best. That doesn't mean that you won't be approved
                    but, certain
                    restrictions will apply to the loan's terms.</span>
            </p>

            <p style="margin-top: 20px;">
                <span><strong>580 - 619 </strong></span>
                <span> (Poor) With a poor credit rating you can still get an unsecured personal loan and even a
                    mortgage,
                    but the terms and interest rates won't be very appealing. You'll be required to pay more over a
                    longer period of
                    time because of the high interest rates.</span>
            </p>

            <p style="margin-top: 20px;">
                <span><strong>500 - 579 </strong></span>
                <span> (Bad) With a score in this range you can get a loan but nothing even close to what you expect it
                    to be.
                    Some people with bad credit apply for loans to consolidate debt in search for a fresh start.
                    However, if you
                    decide to do that proceed cautiously. With a 500 credit score you need to make sure that you don't
                    default on
                    payments or you'll be making your situation worse and might head towards bankruptcy, which is not
                    what you
                    want.</span>
            </p>

            <p style="margin-top: 20px;">
                <span><strong>499 and Lower </strong></span>
                <span> (Very Bad) If this is your score range you need serious assistance with how you handle your
                    credit. You're making too many credit blunders and they will only get worse if you don't take
                    positive action. If
                    you are thinking of a loan (which won't be easy), the rates will be very high and the terms will be
                    very strict. We
                    recommend that you fix your credit first before applying for a loan.</span>
            </p>

        </div> <!-- // End of page 5 -->

        <!--Beginning of page 6-->
        <div style="page-break-before:always;">

            <p><strong>PART 2 - YOUR CREDIT SCORES AND SUMMARY
                </strong></p>
            <p>We have analyzed your credit reports from the three major bureaus. Here are our findings:
            </p>
            <p><strong>Your Credit Scores:
                </strong></p>

            <div>
                <table style="width:100%;">
                    <tr style="background-color: #ffffff !important;
                        -webkit-print-color-adjust: exact;text-align: center;font-size: 22px;">
                        <th style="width: 33.33%;padding: 5px;">EQUIFAX</th>
                        <th style="width: 33.33%;padding: 5px;">EXPERIAN</th>
                        <th style="width: 33.33%;padding: 5px;">TRANSUNION</th>
                    </tr>

                    <tr style="background-color: #ffffff !important;
                        -webkit-print-color-adjust: exact;text-align: center;font-size: 40px;">
                        <td style="width: 33.33%;padding: 5px;">677</td>
                        <td style="width: 33.33%;padding: 5px;">668</td>
                        <td style="width: 33.33%;padding: 5px;">663</td>
                    </tr>
                </table>
            </div>

            <p style="text-align: center;">These scores were reported by IdentityIQ on 03/15/2018</p>


            <p style="margin:20px;"><strong>Keep Your Credit Monitoring Account Active Throughout The Credit Repair
                    Process</strong></p>
            <p>Your credit scores may vary depending on where you get your credit reports from, because different
                sources
                have different methods for determining your score and scheduling updates. Maintaining one (1) credit
                monitoring account will give us a baseline score as a point of reference to grow from, to accurately see
                changes
                as they happen. For this reason, you must keep your same credit monitoring account active, rather than
                checking your scores on multiple sites that will differ.</p>

            <p style="margin-top: 40px;"><strong>Your Derogatory Summary:
                </strong></p>
            <p>Next we analyzed all the items on your reports, to determine which accounts are negatively impacting your
                score. Here are our findings:</p>

            <div>
                <table style="width:100%;border:1.5px solid black;border-collapse:collapse;">
                    <tr style="background-color: #ececec !important;
                    -webkit-print-color-adjust: exact;">
                        <th style="width: 25%;padding: 5px;border:1.5px solid#000000;"></th>
                        <th style="width: 25%;padding: 5px;border:1.5px solid#000000;">EQUIFAX</th>
                        <th style="width: 25%;padding: 5px;border:1.5px solid#000000;">EXPERIAN</th>
                        <th style="width: 25%;padding: 5px;border:1.5px solid#000000;">TRANSUNION
                        </th>
                    </tr>
                    <tr style="background-color: #FBB0C1 !important;
                    -webkit-print-color-adjust: exact;text-align: center;">
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">Delinquent:</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">0</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">0</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">0</td>
                    </tr>
                    <tr style="background-color: #FBB0C1 !important;
                    -webkit-print-color-adjust: exact;text-align: center;">
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">Derogatory:</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">1</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">1</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">1</td>
                    </tr>
                    <tr style="background-color: #FBB0C1 !important;
                    -webkit-print-color-adjust: exact;text-align: center;">
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">Collection:</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">0</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">0</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">0</td>
                    </tr>
                    <tr style="background-color: #FBB0C1 !important;
                    -webkit-print-color-adjust: exact;text-align: center;">
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">Public Records:</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">0</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">0</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">0</td>
                    </tr>
                    <tr style="background-color: #A4E8E0 !important;
                    -webkit-print-color-adjust: exact;text-align: center;">
                        <td style="width: 25%;padding: 5px;border:1.5px solid #4CD7D0;">Inquiries(2 years):</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #4CD7D0;">0</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #4CD7D0;">0</td>
                        <td style="width: 25%;padding: 5px;border:1.5px solid #4CD7D0;">3</td>
                    </tr>
                    <tr style="background-color: #ececec !important;
                    -webkit-print-color-adjust: exact;">
                        <td colspan="4" style="width: 100%;height: 16px;padding: 5px;border:1px solid #000000;"> </td>
                    </tr>
                </table>
            </div>

        </div> <!-- // End of page 6 -->

        <!--Beginning of page 7-->
        <div style="page-break-before:always;">
            <p><strong>PART 3 - ANALYSIS OF YOUR ACCOUNTS</strong></p>
            <p style="margin-top: 20px;"><strong>Your Derogatory Items:
                </strong></p>
            <p>You have <span><strong>9</strong></span> items marked as delinquent or derogatory. Recent late payments,
                collections, and other derogatory
                items within the last six months will hurt your credit score more than older inactive accounts. Accounts
                within
                the last 24 months carry the second most weight. This is why it is crucial to pay all bills on time and
                do not miss
                any payments.</p>

            <div>
                <table style="width:100%;border:2px solid #D44247;border-collapse:collapse;">
                    <tr style="background-color: #FBB0C1 !important;
                        -webkit-print-color-adjust: exact;">
                        <th style="width: 25%;padding: 5px;">Creditor/Furnisher</th>
                        <th style="width: 10%;padding: 5px;">Equifax</th>
                        <th style="width: 10%;padding: 5px;">Experian</th>
                        <th style="width: 10%;padding: 5px;">Transunion
                        </th>
                        <th style="width: 45%;padding: 5px;border:1.5px solid#D44247;">Issue
                        </th>
                    </tr>
                    <tr style="background-color: #ffffff !important;
                        -webkit-print-color-adjust: exact;text-align: center;">
                        <td style="width: 25%;padding: 5px;border:1.5px solid #D44247;">TD BANK N.A. </td>
                        <td style="width: 10%;padding: 5px;border:1.5px solid #D44247;">11/13 </td>
                        <td style="width: 10%;padding: 5px;border:1.5px solid #D44247;">11/13</td>
                        <td style="width: 10%;padding: 5px;border:1.5px solid #D44247;">11/13 </td>
                        <td style="width: 45%;padding: 5px;border:1.5px solid #D44247;">Was 90 days late 1 time(s).
                        </td>
                    </tr>
                    <tr style="background-color: #FBB0C1 !important;
                        -webkit-print-color-adjust: exact;">
                        <td colspan="5" style="width: 100%;height: 16px;padding: 5px;border:1px solid #D44247;"> </td>
                    </tr>
                </table>
            </div>

            <p style="margin-top: 20px;"><strong>Your Public Records:
                </strong></p>
            <p>You have <strong>zero</strong> public records. Public records include details of court records,
                bankruptcy filings, tax
                liens and
                monetary judgments. These generally remain on your Credit Report for 7 to 10 years.
            </p>

            <div>
                <table style="width:100%;border:2px solid #000000;border-collapse:collapse;">
                    <tr style="background-color: #ececec !important;
                        -webkit-print-color-adjust: exact;">
                        <th style="width: 25%;padding: 5px;">Creditor/Furnisher</th>
                        <th style="width: 10%;padding: 5px;">Equifax</th>
                        <th style="width: 10%;padding: 5px;">Experian</th>
                        <th style="width: 10%;padding: 5px;">Transunion
                        </th>
                        <th style="width: 45%;padding: 5px;border:1.5px solid #000000;">Issue
                        </th>
                    </tr>
                    <tr style="background-color: #ffffff !important;
                        -webkit-print-color-adjust: exact;text-align: center;">
                        <td style="width: 100%;">No Record Found.</td>

                        <!--If there is Records, delete this comments-->
                        <!--
                        <td style="width: 25%;padding: 5px;border:1.5px solid #000000;">TD BANK N.A. </td>
                        <td style="width: 10%;padding: 5px;border:1.5px solid #000000;">11/13 </td>
                        <td style="width: 10%;padding: 5px;border:1.5px solid #000000;">11/13</td>
                        <td style="width: 10%;padding: 5px;border:1.5px solid #000000;">11/13 </td>
                        <td style="width: 45%;padding: 5px;border:1.5px solid #000000;">Was 90 days late 1 time(s).
                        </td>
                        -->
                    </tr>
                    <tr style="background-color: #ececec !important;
                        -webkit-print-color-adjust: exact;">
                        <td colspan="5" style="width: 100%;height: 16px;padding: 5px;border:1px solid #000000;"> </td>
                    </tr>
                </table>
            </div>

            <p style="margin-top: 20px;"><strong>Your Inquiries:
                </strong></p>
            <p>You have <strong>1</strong> inquiries on your reports. Each time you apply for credit it lowers your
                score. For that
                reason we ask
                during credit repair that you <u>do not apply for anything.</u>
            </p>

            <div>
                <table style="width:100%;border:2px solid #4CD7D0;border-collapse:collapse;">
                    <tr style="background-color: #A4E8E0 !important;
                    -webkit-print-color-adjust: exact;">
                        <th style="width: 25%;padding: 5px;">Creditor/Furnisher</th>
                        <th style="width: 10%;padding: 5px;">Equifax</th>
                        <th style="width: 10%;padding: 5px;">Experian</th>
                        <th style="width: 10%;padding: 5px;">Transunion
                        </th>
                        <th style="width: 45%;padding: 5px;border:1.5px solid #4CD7D0;">Issue
                        </th>
                    </tr>
                    <tr style="background-color: #ffffff !important;
                    -webkit-print-color-adjust: exact;text-align: center;">

                        <td style="width: 25%;padding: 5px;border:1.5px solid #4CD7D0;">CLEAR CHOICE</td>
                        <td style="width: 10%;padding: 5px;border:1.5px solid #4CD7D0;"> </td>
                        <td style="width: 10%;padding: 5px;border:1.5px solid #4CD7D0;"></td>
                        <td style="width: 10%;padding: 5px;border:1.5px solid #4CD7D0;">12/17</td>
                        <td style="width: 45%;padding: 5px;border:1.5px solid #4CD7D0;">Inquiry
                        </td>
                    </tr>
                    <tr style="background-color: #A4E8E0 !important;
                    -webkit-print-color-adjust: exact;">
                        <td colspan="5" style="width: 100%;height: 16px;padding: 5px;border:1px solid #4CD7D0;"> </td>
                    </tr>
                </table>
            </div>
            <p><strong>We Are Experts In Disputing Errors On Your Report That Lower Your Score.</strong></p>
            <p>While we cannot promise to remove all of your negative items on your report, we do know how to use the
                law in
                your favor and we have an awesome track record.</p>

        </div> <!-- // End of page 7 -->

        <!--Beginning of page 8-->
        <div style="page-break-before:always;">
            <p><strong>Credit Utilization:</strong></p>
            <div>
                <table style="width:100%;border-collapse:collapse;">
                    <tr style="background-color: #ffffff !important;
                    -webkit-print-color-adjust: exact;">
                        <th style="width: 25%;padding: 5px;"></th>
                        <th style="width: 25%;padding: 5px;border-bottom:1px solid #e4e3e3;">TRANSUNION
                        </th>
                        <th style="width: 25%;padding: 5px;border-bottom:1px solid #e4e3e3;">EQUIFAX</th>
                        <th style="width: 25%;padding: 5px;border-bottom:1px solid #e4e3e3;">EXPERIAN</th>
                    </tr>
                    <tr style="background-color: #ffffff !important;
                    -webkit-print-color-adjust: exact;text-align: center;border-bottom:2px solid #e4e3e3;">
                        <td style="width: 25%;padding: 5px;">Credit card limit</td>
                        <td style="width: 25%;padding: 5px;">$14,500</td>
                        <td style="width: 25%;padding: 5px;">$16,400</td>
                        <td style="width: 25%;padding: 5px;">$16,400</td>
                    </tr>
                    <tr style="background-color: #ffffff !important;
                    -webkit-print-color-adjust: exact;text-align: center;border-bottom:2px solid #e4e3e3;">
                        <td style="width: 25%;padding: 5px;">Open credit card debt</td>
                        <td style="width: 25%;padding: 5px;">$4,775</td>
                        <td style="width: 25%;padding: 5px;">$4,775</td>
                        <td style="width: 25%;padding: 5px;">$4,802</td>
                    </tr>
                    <tr style="background-color: #ffffff !important;
                    -webkit-print-color-adjust: exact;text-align: center;border-bottom:2px solid #e4e3e3;">
                        <td style="width: 25%;padding: 5px;"></td>
                        <td style="width: 25%;padding: 5px;"></td>
                        <td style="width: 25%;padding: 5px;"></td>
                        <td style="width: 25%;padding: 5px;"></td>
                    </tr>
                </table>
            </div>

            <p>You have <strong>$15,767</strong> in revolving credit lines and your balances average at
                <strong>$4,784</strong> which
                means that you are
                utilizing <strong>30%</strong> of your available credit line.
            </p>

            <p><strong>How this impacts your score
                </strong></p>
            <p>The purpose of a credit score is for lenders to determine the likelihood that you will repay money you
                borrow.
                Therefore, the scoring algorithms looks to see that you're not overextended in credit card debt and
                living
                beyond your means. As a rule of thumb, maxing out your cards will <u>lower</u> your score while showing
                more
                available credit will <u>increase</u> your score.
            </p>
            <p>Pro tip: If you're carring high balances, a quick trick to increase to score is to pay your balances down
                to below
                25% of the available credit limit of each card and never spend any more than that, even if you pay the
                bill off in
                full each month.</p>

            <p><strong>How quickly will I see the changes?
                </strong></p>
            <p>Credit card companies report your balances to the bureaus once per month (each on a different day) and
                your
                credit reports and scores at the credit monitoring company will only update once per month, therefore it
                can
                take upto two months to see this begin to impact your scores. For this reason, it's important to
                understand that
                improving your credit scores takes time and a commitment to change your daily habits and the way you
                spent
                money. The good news is that the sooner you can do it, the sooner your scores will rise.</p>

            <p><strong>Credit Utilization Summary:</strong></p>

            <div>
                <table style="width:100%;border:1px solid #000000;border-collapse:collapse;">

                    <tr style="background-color: #ececec !important;
                    -webkit-print-color-adjust: exact;text-align: center;border:1px solid #000000;">
                        <th style=" width: 25%;padding: 8px;border:1px solid #000000;">
                        </th>
                        <th style="width: 25%;padding: 8px;border:1px solid #000000;">EQUIFAX
                        </th>
                        <th style="width: 25%;padding: 8px;border:1px solid #000000;">EXPERIAN</th>
                        <th style="width: 25%;padding: 8px;border:1px solid #000000;">TRANSUNION</th>
                    </tr>

                    <tr style="background-color: #ececec !important;
                    -webkit-print-color-adjust: exact;text-align: center;border:1px solid #000000;">
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;"><strong>Credit Summary </strong>
                        </td>
                        <td colspan="3" style="width: 75%;padding: 5px;text-align: left;">An overview credit status
                            including open and
                            closed
                            accounts and
                            balance information</td>
                    </tr>

                    <tr style="background-color: #ffffff !important;
                    -webkit-print-color-adjust: exact;text-align: center;border:1px solid #000000;">
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;text-align: left;">Total Accounts:
                        </td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">21</td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">21</td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">21</td>
                    </tr>

                    <tr style="background-color: #ffffff !important;
                    -webkit-print-color-adjust: exact;text-align: center;border:1px solid #000000;">
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;text-align: left;">Open Accounts
                        </td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">12</td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">12</td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">10</td>
                    </tr>

                    <tr style="background-color: #ffffff !important;
                    -webkit-print-color-adjust: exact;text-align: center;border:1px solid #000000;">
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;text-align: left;">Closed Accounts:
                        </td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">9</td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">9</td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">11</td>
                    </tr>

                    <tr style="background-color: #ffffff !important;
                    -webkit-print-color-adjust: exact;text-align: center;border:1px solid #000000;">
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;text-align: left;">Balances:
                        </td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">$169,439.00</td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">$169,965.00</td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">$169,439.00</td>
                    </tr>

                    <tr style="background-color: #ffffff !important;
                    -webkit-print-color-adjust: exact;text-align: center;border:1px solid #000000;">
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;text-align: left;">Payments:
                        </td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">$1,855.00</td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">$1,927.00</td>
                        <td style="width: 25%;padding: 5px;border:1px solid #000000;">$1,855.00</td>
                    </tr>

                    <tr style="background-color: #ececec !important;
                    -webkit-print-color-adjust: exact;text-align: center;border:1px solid #000000;">
                        <td colspan="4" style="width: 25%;padding: 5px;height: 10px;"></td>
                    </tr>

                </table>
            </div>

            <p><strong>PART 4 - AN OVERVIEW OF OUR PROCESS
                </strong></p>
            <p><strong>Our plan of action</strong></p>
            <p>The credit system is flawed, and nearly 80% of all reports have errors that can lower your score. But you
                have
                rights and we know how to use them to your benefit! The law gives you the right to dispute <u>any</u>
                item on
                your
                credit reports. And if those items cannot be verified, they must be removed. So we will write many
                letters to the
                bureaus. If they can't prove it, they must remove it! And we are very good at this!
            </p>

            <p><strong>We Provide Document Preparation And Credit Education</strong></p>
            <p>We will be drafting many letters on your behalf to credit bureaus and creditors, to challenge the items
                you wish
                us to challenge. Along the way, we will also guide you how to better manage your credit -- and how to
                keep
                your awesome credit long after our work is done.</p>

        </div> <!-- // End of page 8 -->

        <!--Beginning of page 9-->
        <div style="page-break-before:always;">
            <p><strong>PART 5 - YOUR PART IN THE PROCESS</strong></p>
            <p><strong>Your Next Steps</strong></p>
            <ol>
                <li>Log Into Your Client Portal. We will email you the login details.</li>
                <li>Watch our 2-minute video.</li>
                <li>Provide a copy of your Photo ID and a copy of the top section of a recent utility bill (or an
                    insurance
                    statement or some other bill) as proof of your current address to include with our letters to the
                    credit
                    bureaus. Take a picture of these on your phone and upload them to us in your client portal.</li>
            </ol>

            <p><strong>How You Can Speed Up The Process</strong></p>
            <ol>
                <li>Stop applying for credit (Each time you do it lowers your scores.)</li>
                <li>Do not close any accounts (This also lowers your score.)</li>
                <li>Pay your credit cards down to below 25% of the available credit line. This will make a huge positive
                    impact on your credit score.</li>
                <li>Never spend more than 25% of the available credit line, even if you pay the balance off in full each
                    month.</li>
                <li>. Pay your bills on time! One missed payment will lower your score dramatically and undo all the
                    work we
                    are doing.</li>
                <li>Keep your credit monitoring account active throughout the credit repair process, so we can see the
                    changes to your accounts and scores. Your score won't suffer if you're ordering your own reports. Be
                    sure to let us know your login details to the credit monitoring account. You can add those in your
                    client
                    portal.</li>
                <li>Keep your credit monitoring account active throughout the credit repair process, so we can see the
                    changes to your accounts and scores. Your score won't suffer if you're ordering your own reports. Be
                    sure to let us know your login details to the credit monitoring account. You can add those in your
                    client
                    portal.</li>
            </ol>
        </div> <!-- // End of page 9 -->

        <!--Beginning of page 10-->
        <div style="page-break-before:always;">
            <p><strong>This Process Takes Time</strong></p>
            <p>Remember, it has taken you years to get your credit into its current state, so cleaning it up will not
                happen
                overnight. We cannot dispute everything all at once, or the credit bureaus will reject the disputes by
                marking
                them as "frivolous," so we must do this carefully and strategically. It takes 30 to 45 days for bureaus
                and
                creditors to respond to each letter, and even more time for changes to reflect on your reports. A
                difficult item
                may take multiple letters to multiple parties, so patience is key. Thanks to technology (and by logging
                into our
                client portal), you'll receive real-time updates of the work we're doing every step of the way.</p>

            <p>By following our program and our advice, your credit will improve -- and along the way, we'll teach you
                how to
                maintain your excellent credit long after our work is done.</p>

            <p><strong>So Let's Get Started!</strong></p>
            <p>How do we do that? Just reach out to us, so we can complete your signup process and activate your client
                portal access (if we haven't already).
            </p>
            <p>Our phone number is <strong>(833) 886-2747</strong> </p>
            <p>Our email is <span>ccyrius@theoasisfirm.com</span></p>
            <p>Our site is at <span>www.theoasisfirm.com</span></p>

            <p>Throughout this process, our contact information is always on our website and in our emails. You can also
                send
                us by secure messages in your portal. We want to hear from you and we are eager to help. Once the credit
                repair process has begun we will also be sending you progress reports and updates every step of the way.
            </p>
            <p>We appreciate that you choose us. We look forward to working with you to improve your credit and your
                financial future!
            </p>
            <p>Credit is our passion. We understand how important your credit is for your future and we we work
                tirelessly to
                make sure we are able to help you achieve your financial goals.</p>

        </div> <!-- // End of page 10 -->

    </div> <!-- // End of div class container -->
    </div>

</body>

</html>
  `;
};
