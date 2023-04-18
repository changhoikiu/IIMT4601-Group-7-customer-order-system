import { Auth } from "aws-amplify";
import { CognitoUser } from "amazon-cognito-identity-js";

export async function signUp(email, fullName) {
  const params = {
    username: email,
    password: getRandomString(30),
    attributes: {
      name: fullName,
    },
  };
  await Auth.signUp(params);
}

function getRandomString(bytes) {
  const randomValues = new Uint8Array(bytes);
  window.crypto.getRandomValues(randomValues);
  return Array.from(randomValues).map(intToHex).join("");
}

function intToHex(nr) {
  return nr.toString(16).padStart(2, "0");
}

let cognitoUser; // Track authentication flow state in this object
export async function signIn(email) {
  cognitoUser = await Auth.signIn(email);
}

export async function answerCustomChallenge(answer) {
  // Send the answer to the User Pool
  // This will throw an error if it’s the 3rd wrong answer
  cognitoUser = await Auth.sendCustomChallengeAnswer(cognitoUser, answer);

  // It we get here, the answer was sent successfully,
  // but it might have been wrong (1st or 2nd time)
  // So we should test if the user is authenticated now
  try {
    // This will throw an error if the user is not yet authenticated:
    await Auth.currentSession();
  } catch {
    console.log("Apparently the user did not enter the right code");
  }
}