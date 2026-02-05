// Type declarations for packages without types

declare module 'react-copy-to-clipboard' {
  import { Component, ReactNode } from 'react';

  export interface CopyToClipboardProps {
    text: string;
    onCopy?: (text: string, result: boolean) => void;
    children: ReactNode;
    options?: {
      debug?: boolean;
      message?: string;
      format?: string;
    };
  }

  export class CopyToClipboard extends Component<CopyToClipboardProps> {}

  export default CopyToClipboard;
}

declare module 'react-google-recaptcha' {
  import { Component, RefObject } from 'react';

  interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    onErrored?: () => void;
    onExpired?: () => void;
    theme?: 'light' | 'dark';
    size?: 'compact' | 'normal' | 'invisible';
    tabindex?: number;
    badge?: 'bottomright' | 'bottomleft' | 'inline';
    asyncScriptOnLoad?: () => void;
  }

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {
    reset(): void;
    execute(): void;
    executeAsync(): Promise<string>;
    getValue(): string | null;
  }
}

declare module 'ua-parser-js' {
  interface IResult {
    ua: string;
    browser: {
      name?: string;
      version?: string;
      major?: string;
    };
    engine: {
      name?: string;
      version?: string;
    };
    os: {
      name?: string;
      version?: string;
    };
    device: {
      model?: string;
      type?: string;
      vendor?: string;
    };
    cpu: {
      architecture?: string;
    };
  }

  class UAParser {
    constructor(uastring?: string, extensions?: Record<string, unknown>);
    getBrowser(): IResult['browser'];
    getDevice(): IResult['device'];
    getEngine(): IResult['engine'];
    getOS(): IResult['os'];
    getCPU(): IResult['cpu'];
    getResult(): IResult;
    getUA(): string;
    setUA(uastring: string): UAParser;
  }

  export = UAParser;
}

declare module 'aos' {
  interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    disable?: boolean | string | (() => boolean);
    startEvent?: string;
    animatedClassName?: string;
    initClassName?: string;
    useClassNames?: boolean;
    disableMutationObserver?: boolean;
    debounceDelay?: number;
    throttleDelay?: number;
  }

  interface Aos {
    init(options?: AosOptions): void;
    refresh(force?: boolean): void;
    refreshHard(): void;
  }

  const aos: Aos;
  export default aos;
}

declare module '@mailchimp/mailchimp_marketing' {
  interface Config {
    apiKey: string;
    server: string;
  }

  interface ListMemberBody {
    email_address: string;
    status: 'subscribed' | 'unsubscribed' | 'pending' | 'cleaned';
    tags?: string[];
  }

  interface MailchimpMarketing {
    setConfig(config: Config): void;
    lists: {
      addListMember(listId: string, body: ListMemberBody): Promise<unknown>;
      setListMember(listId: string, subscriberHash: string, body: ListMemberBody): Promise<unknown>;
    };
  }

  const mailchimp: MailchimpMarketing;
  export default mailchimp;
}
