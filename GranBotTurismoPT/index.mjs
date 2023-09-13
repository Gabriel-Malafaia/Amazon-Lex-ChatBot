import { database } from "./database/index.mjs";

export const handler = async (event) => {
  try {
    const intentName = event.sessionState.intent.name;

    if (intentName === "CheckBalance") {
      const response = CheckBalance(event);
      return response;
    } else if (intentName === "FollowupBalance") {
      const response = FollowupBalance(event);
      return response;
    } else {
      throw new Error("Intent with name " + intentName + " not supported");
    }
  } catch (error) {
    console.error(error);
    return errorResponse(error.message);
  }
};
