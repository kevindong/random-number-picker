# Random Number Picker
A random number picker for Amazon's Alexa. May or may not be published [here](https://www.amazon.com/2-Ducks-Random-Number-Picker/dp/B074JZ8V5R). Creating this trivial skill was used as a learning experience.

# Caveats
When testing this skill in Amazon's Developers portal, note that you should *not* use periods after sentences. In real life, no one says "Alexa, give me a random number between 1 and 20 period". Consequently, this is a non-issue.

# Replication of this Skill
1. Create a [Amazon Lambda function](https://console.aws.amazon.com/lambda) with the Alexa Skills Kit as the trigger. Take note of the ARN and copy it somewhere safe. You'll need it soon.
2. Clone this repo and run `npm install`. 
3. Upload a zip of the contents of this file (note: *not* the folder containing all the files). Include the resulting `node_modules` folder.
4. Go [here](https://developer.amazon.com/edw/home.html) to set up the Alexa Skill with the following values:

## Skill Information
### Name
Random Number Picker

### Invocation Name
random number picker

## Interaction Model
### Intent Schema
```json
{
  "intents": [
    {
      "slots": [
        {
          "name": "begin",
          "type": "AMAZON.NUMBER"
        },
        {
          "name": "end",
          "type": "AMAZON.NUMBER"
        }
      ],
      "intent": "getNumber"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    }
  ]
}
```

### Sample Utterances
```
getNumber give me a number between {begin} and {end}
getNumber pick a number between {begin} and {end}
getNumber give me a random number between {begin} and {end}
````

## Configuration
Pick `AWS Lambda ARN (Amazon Resource Name)`, select the appropriate geographic region, and paste in the ARN from step 1.

## Publishing
### Category
Education & Reference

### Short Skill Description
Randomly picks a number between a range you give.

### Testing Instructions
No specific testing instructions.

### Countries & Regions
All

### Short Skill Description
Randomly picks a number between a range you give.

### Full Skill Description
With this skill, your device will be able to randomly pick a number between a range you give (for instance, saying 'give me a random number between 5 and 20').

### Example Phrases
1. Alexa, ask Random Number Picker to give me a random number between 100 and 500
2. Alexa, ask Random Number Picker to pick a number between 5 and 20
3. Alexa, ask Random Number Picker to pick a number between 0 and 1000000

### Keywords
random,number,picker,chance

# License
Apache 2.0