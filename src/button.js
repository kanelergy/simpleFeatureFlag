import React from "react";
import { withLDConsumer } from "launchdarkly-react-client-sdk";
function Button({ flags }) {
  console.log("flags", flags);
  return (
    <div>
      {flags.showButton ? (
        <button> Congrats, you have access to this feature flagged button!</button>
      ) : (
        "You are not authorized to access this feature. Please contact your administrator for privileges."
      )}
    </div>
  );
}
export default withLDConsumer()(Button);
