// src/components/custom/sidebar/Sidebar.tsx

import RecentPosts from "../recent-posts/RecentPosts";
import SubscriptionForm from "../subscription-form/SubscriptionForm";

const Sidebar = () => (
  <aside className="lg:w-full space-y-8 mt-40">
    <div className="sticky top-28 space-y-8">
      <RecentPosts />
      <SubscriptionForm />
    </div>
  </aside>
);

export default Sidebar;
