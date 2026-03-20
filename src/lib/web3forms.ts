type Web3FormsType = 'contact' | 'internship';

type SubmitArgs = {
  type: Web3FormsType;
  name: string;
  email: string;
  message: string;
};

export async function submitViaWeb3Forms(args: SubmitArgs) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      ok: false,
      error:
        'Form service is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your .env.local file.',
    };
  }

  const subject =
    args.type === 'internship'
      ? 'New Internship Application - CodeHera'
      : 'New Contact Form Submission - CodeHera';

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: 'CodeHera Website',
      replyto: args.email,
      name: args.name,
      email: args.email,
      message: args.message,
      type: args.type,
    }),
  });

  const data = (await response.json()) as { success?: boolean; message?: string };
  return {
    ok: Boolean(data.success),
    error: data.success ? undefined : data.message ?? 'Unable to send your message right now.',
  };
}

