// src/components/custom/sidebar/Sidebar.tsx

import RecentPosts from "../recent-posts/RecentPosts";
import SubscriptionForm from "../subscription-form/SubscriptionForm";

const Sidebar = () => (
  <div className="sticky top-28 space-y-8">
    <RecentPosts />
    <SubscriptionForm />
  </div>
);

export default Sidebar;
