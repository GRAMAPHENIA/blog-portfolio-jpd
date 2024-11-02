export const getShareUrl = (slug: string): string => {
  if (typeof window === 'undefined') return `/blog/${slug}`;
  return `${window.location.origin}/blog/${slug}`;
};

export const getSocialShareUrl = (platform: string, title: string, url: string): string => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  switch (platform) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    default:
      return '';
  }
};