exports.handler = async (event) => {
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
    // Trate qualquer erro aqui, se necessário.
    console.error(error);
    return errorResponse(error.message);
  }
};

function CheckBalance(event) {
  const sessionAttributes = getSessionAttributes(event);
  const slots = getSlots(event);
  const account = getSlot(event, "accountType");

  // Gere um saldo fictício aqui
  const balance = getRandomBalance();

  const text = `Thank you. The balance on your ${account} account is $${balance} dollars.`;

  const message = {
    contentType: "PlainText",
    content: text,
  };

  const fulfillmentState = "Fulfilled";

  return closeResponse(event, sessionAttributes, fulfillmentState, message);
}

function FollowupBalance(event) {
  const sessionAttributes = getSessionAttributes(event);
  const slots = getSlots(event);
  const account = getSlot(event, "accountType");

  // Gere um saldo fictício aqui
  const balance = getRandomBalance();

  const text = `Thank you. The balance on your ${account} account is $${balance} dollars.`;

  const message = {
    contentType: "PlainText",
    content: text,
  };

  const fulfillmentState = "Fulfilled";

  return closeResponse(event, sessionAttributes, fulfillmentState, message);
}

function getSessionAttributes(event) {
  const sessionState = event.sessionState;

  if (sessionState && sessionState.sessionAttributes) {
    return sessionState.sessionAttributes;
  }

  return {};
}

function getSlots(event) {
  return event.sessionState.intent.slots;
}

function getSlot(event, slotName) {
  const slots = getSlots(event);

  if (slots && slots[slotName] && slots[slotName].value.interpretedValue) {
    return slots[slotName].value.interpretedValue;
  } else {
    return null;
  }
}

function getRandomBalance() {
  // Gere um saldo fictício aqui
  return (Math.floor(Math.random() * 49001) + 1000) / 100;
}

function closeResponse(event, sessionAttributes, fulfillmentState, message) {
  event.sessionState.intent.state = fulfillmentState;

  return {
    sessionState: {
      sessionAttributes: sessionAttributes,
      dialogAction: {
        type: "Close",
      },
      intent: event.sessionState.intent,
    },
    messages: [message],
    sessionId: event.sessionId,
  };
}

function errorResponse(message) {
  return {
    sessionState: {
      dialogAction: {
        type: "ElicitIntent",
      },
    },
    messages: [
      {
        contentType: "PlainText",
        content: message,
      },
    ],
  };
}
