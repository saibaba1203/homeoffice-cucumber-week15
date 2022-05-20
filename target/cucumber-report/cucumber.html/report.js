$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/VisaConfirmationTest.feature");
formatter.feature({
  "line": 1,
  "name": "Visa checks",
  "description": "",
  "id": "visa-checks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13732461599,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I start visa check",
  "keyword": "And "
});
formatter.match({
  "location": "VisaConfirmationTest.iStartVisaCheck()"
});
formatter.result({
  "duration": 1003570400,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "An Australian coming to the UK for Tourism.",
  "description": "",
  "id": "visa-checks;an-australian-coming-to-the-uk-for-tourism.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I select a nationality \u0027Australia\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select reason \u0027Tourism\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will be informed \u0027You will not need a visa to come to the UK\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationTest.iSelectANationalityAustralia()"
});
formatter.result({
  "duration": 724043100,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iSelectReasonTourism()"
});
formatter.result({
  "duration": 628514000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iWillBeInformedYouWillNotNeedAVisaToComeToTheUK()"
});
formatter.result({
  "duration": 47622200,
  "status": "passed"
});
formatter.after({
  "duration": 1084403799,
  "status": "passed"
});
formatter.before({
  "duration": 4520782000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I start visa check",
  "keyword": "And "
});
formatter.match({
  "location": "VisaConfirmationTest.iStartVisaCheck()"
});
formatter.result({
  "duration": 448194800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "A Chilean coming to the UK for Work and plans on staying for longer than 6 months",
  "description": "",
  "id": "visa-checks;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-6-months",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Sanity"
    },
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I select a nationality \u0027Chile\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select reason \u0027Work\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I state I am intending to stay for \u0027more\u0027 than 6 months",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I state I have planning to work \u0027health\u0027 types of job",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I will be informed \u0027You need a visa to work in health and care\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationTest.iSelectANationalityChile()"
});
formatter.result({
  "duration": 379530400,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iSelectReasonWork()"
});
formatter.result({
  "duration": 361799300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 47
    }
  ],
  "location": "VisaConfirmationTest.iStateIAmIntendingToStayForMoreThanMonths(int)"
});
formatter.result({
  "duration": 335974000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iStateIHavePlanningToWorkHealthTypesOfJob()"
});
formatter.result({
  "duration": 381787300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iWillBeInformedYouNeedAVisaToWorkInHealthAndCare()"
});
formatter.result({
  "duration": 70717300,
  "status": "passed"
});
formatter.after({
  "duration": 823592799,
  "status": "passed"
});
formatter.before({
  "duration": 5080530199,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I start visa check",
  "keyword": "And "
});
formatter.match({
  "location": "VisaConfirmationTest.iStartVisaCheck()"
});
formatter.result({
  "duration": 420040300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "A Columbian national coming to the UK to join a partner for a long stay. They do have an Article 10 or 20 card.",
  "description": "",
  "id": "visa-checks;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay.-they-do-have-an-article-10-or-20-card.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I select a nationality of \u0027Colombia\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select reason \u0027family\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I state My partner or family member have uk immigration status \u0027yes\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I will be informed \u0027You’ll need a visa to join your family or partner in the UK\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationTest.iSelectANationalityOfColombia()"
});
formatter.result({
  "duration": 440535099,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iSelectReasonFamily()"
});
formatter.result({
  "duration": 466460900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iStateMyPartnerOrFamilyMemberHaveUkImmigrationStatusYes()"
});
formatter.result({
  "duration": 507242700,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTest.iWillBeInformedYouLlNeedAVisaToJoinYourFamilyOrPartnerInTheUK()"
});
formatter.result({
  "duration": 46522500,
  "status": "passed"
});
formatter.after({
  "duration": 849663500,
  "status": "passed"
});
});