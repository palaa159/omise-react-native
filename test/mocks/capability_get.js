const nock = require("nock");
nock("https://api.omise.co")
  .persist()
  .get("/capability")
  .reply(
    200,
    {
      "object": "capability",
      "location": "/capability",
      "banks": [
        "test",
        "bbl",
        "kbank",
        "rbs",
        "ktb",
        "jpm",
        "mufg",
        "tmb",
        "scb",
        "citi",
        "smbc",
        "sc",
        "cimb",
        "uob",
        "bay",
        "mega",
        "boa",
        "cacib",
        "gsb",
        "hsbc",
        "db",
        "ghb",
        "baac",
        "mb",
        "bnp",
        "tbank",
        "ibank",
        "tisco",
        "kk",
        "icbc",
        "tcrb",
        "lhb"
      ],
      "payment_methods": [
        {
          "object": "payment_method",
          "name": "card",
          "currencies": [
            "THB",
            "JPY",
            "USD",
            "EUR",
            "GBP",
            "SGD",
            "AUD",
            "CHF",
            "CNY",
            "DKK",
            "HKD"
          ],
          "card_brands": [
            "JCB",
            "Visa",
            "MasterCard"
          ],
          "installment_terms": null
        },
        {
          "object": "payment_method",
          "name": "internet_banking_bay",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": null
        },
        {
          "object": "payment_method",
          "name": "internet_banking_ktb",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": null
        },
        {
          "object": "payment_method",
          "name": "internet_banking_scb",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": null
        },
        {
          "object": "payment_method",
          "name": "internet_banking_bbl",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": null
        },
        {
          "object": "payment_method",
          "name": "alipay",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": null
        },
        {
          "object": "payment_method",
          "name": "installment_bay",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": [
            3,
            4,
            6,
            9,
            10
          ]
        },
        {
          "object": "payment_method",
          "name": "installment_kbank",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": [
            3,
            4,
            6,
            10
          ]
        },
        {
          "object": "payment_method",
          "name": "installment_ktc",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": [
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
          ]
        },
        {
          "object": "payment_method",
          "name": "installment_bbl",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": [
            4,
            6,
            8,
            9,
            10
          ]
        },
        {
          "object": "payment_method",
          "name": "installment_first_choice",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": [
            3,
            4,
            6,
            9,
            10,
            12,
            18,
            24,
            36
          ]
        },
        {
          "object": "payment_method",
          "name": "bill_payment_tesco_lotus",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": null
        },
        {
          "object": "payment_method",
          "name": "barcode_alipay",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": null
        },
        {
          "object": "payment_method",
          "name": "truemoney",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": null
        },
        {
          "object": "payment_method",
          "name": "promptpay",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": null
        },
        {
          "object": "payment_method",
          "name": "points_citi",
          "currencies": [
            "THB"
          ],
          "card_brands": null,
          "installment_terms": null
        }
      ],
      "country": "TH",
      "zero_interest_installments": true
    },
    {
      server: "nginx/1.1",
      "content-type": "application/json"
    }
  );
