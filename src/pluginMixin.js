import withRegistration from "./lib/withRegistration";
import withSelfEvents from "./components/UI/withSelfEvents";
import withEvents from "./lib/withEvents";

export default {
  mixins: [withRegistration, withEvents, withSelfEvents]
};
