"use client";

/**
 * Newsletter Signup Component
 * 
 * Demonstrates Server Actions for form mutations.
 * Works progressively: with JS for enhanced UX, without JS as regular form.
 */

import { useActionState } from "react";
import { subscribeToNewsletter } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle, AlertCircle, Mail } from "lucide-react";

export function NewsletterSignup() {
  // React 19: useActionState replaces manual state management for actions
  // [state, dispatch, isPending]
  const [state, formAction, isPending] = useActionState(
    async (_prevState: { success: boolean; message: string } | null, formData: FormData) => {
      // Wrapper to ensure return type matches state type if action throws
      try {
        return await subscribeToNewsletter(formData);
      } catch (error) {
        return { success: false, message: "Something went wrong. Please try again." };
      }
    },
    null // initial state
  );

  return (
    <Card className="border-2 border-white/8">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle>Server Actions Demo</CardTitle>
            <CardDescription>
              Form mutations without API routes. Uses{" "}
              <code className="text-xs bg-muted px-1 py-0.5 rounded">&quot;use server&quot;</code>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* React 19: action prop accepts the formAction from useActionState */}
        <form action={formAction} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                minLength={2}
                disabled={isPending}
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                disabled={isPending}
                className="bg-background"
              />
            </div>
          </div>

          {state && (
            <Alert
              variant={state.success ? "default" : "destructive"}
              className={state.success ? "border-green-500/50 bg-green-500/10" : undefined}
            >
              {state.success ? (
                <CheckCircle className="h-4 w-4 text-green-500" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            disabled={isPending}
            className="w-full sm:w-auto"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              "Subscribe to Newsletter"
            )}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-white/5">
          <h4 className="text-sm font-semibold mb-2">How it works:</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Form submission handled by Server Action (no API route needed)</li>
            <li>• Runs securely on the server with access to database/APIs</li>
            <li>• Automatic form validation with type safety</li>
            <li>• Page revalidation after successful mutation</li>
            <li>• Progressive enhancement: works without JavaScript</li>
            <li>• <strong>New:</strong> Uses React 19 <code>useActionState</code> hook</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
