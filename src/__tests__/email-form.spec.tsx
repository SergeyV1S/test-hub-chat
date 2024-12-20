import { EmailForm } from "@modules/auth/signIn/_components/EmailForm";
import { render, screen, waitFor } from "@testing-library/react";

import { Providers } from "@app/providers";

describe("email form", () => {
  it("must render email form", async () => {
    render(<EmailForm isPending={false} onSubmit={async () => {}} switchForm={() => {}} />, {
      wrapper: Providers
    });

    await waitFor(
      () => {
        expect(screen.getByText("Вход")).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
