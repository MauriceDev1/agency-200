import React, { useEffect, useState } from 'react';

// Declare BeforeInstallPromptEvent globally
declare global {
  interface BeforeInstallPromptEvent extends Event {
    prompt(): void;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
  }
}

const InstallPWAButton: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      // Type assertion to BeforeInstallPromptEvent
      const promptEvent = event as BeforeInstallPromptEvent;
      promptEvent.preventDefault();
      setDeferredPrompt(promptEvent);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Show the native installation prompt
      deferredPrompt.prompt();

      // Wait for the user to make a choice
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User added to home screen');
        }
        // Clear the deferred prompt after the user choice
        setDeferredPrompt(null);
        setShowInstallButton(false);
      });
    }
  };

  return (
    <div>
      {showInstallButton && (
        <button
        className='text-black'
          id="installButton"
          onClick={handleInstallClick}
          style={{ display: 'block' }}
        >
          Install App
        </button>
      )}
    </div>
  );
};

export default InstallPWAButton;
