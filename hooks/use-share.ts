"use client";

import { useState } from 'react';
import { toast } from 'sonner';
import { getShareUrl, getSocialShareUrl } from '@/lib/utils/share';

export const useShare = (slug: string, title: string) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = getShareUrl(slug);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  const shareToSocial = (platform: string) => {
    const shareUrl = getSocialShareUrl(platform, title, getShareUrl(slug));
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return {
    copied,
    copyToClipboard,
    shareToSocial,
    shareUrl
  };
};