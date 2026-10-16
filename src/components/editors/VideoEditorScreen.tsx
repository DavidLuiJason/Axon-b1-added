/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Video Editor: full-screen editor placeholder for media tools.
 */

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import AxonLogo from '../AxonLogo.jsx';

interface VideoEditorScreenProps {
  onBack: () => void;
  onLogoClick?: () => void;
}

export const VideoEditorScreen: React.FC<VideoEditorScreenProps> = ({
  onBack,
  onLogoClick,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col bg-[#121315] text-[#ECECEC] overflow-hidden select-none font-sans">
      <header className="px-5 pt-4 pb-3 bg-[#141517] border-b border-white/5 flex items-center gap-3 shrink-0 z-20">
        <button
          onClick={onBack}
          aria-label="Back to Media choices"
          title="Back to Media choices"
          className="p-1.5 -ml-1.5 rounded-xl hover:bg-white/5 active:scale-95 transition-all text-[#9A9B9F] hover:text-white cursor-pointer shrink-0"
        >
          <ArrowLeft size={20} />
        </button>
        {onLogoClick && (
          <button
            onClick={onLogoClick}
            aria-label="AXON Navigation"
            title="Toggle navigation menu"
            className="p-1 rounded-xl hover:bg-white/5 active:scale-95 transition-all flex items-center justify-center cursor-pointer shrink-0"
          >
            <AxonLogo className="w-[28px] h-[28px] shrink-0" />
          </button>
        )}
        <span className="font-serif text-[22px] font-semibold tracking-wide text-white leading-tight">
          Video editor
        </span>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 text-center">
        <p className="text-sm font-sans text-[#8E9094]">
          Video editor is coming soon.
        </p>
      </div>
    </div>
  );
};

export default VideoEditorScreen;
