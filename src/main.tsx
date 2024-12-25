import { createRoot } from "react-dom/client";

import { Providers } from "@app/providers";

import "./assets/index.css";
import "./shared/lib/i18n";

createRoot(document.getElementById("root")!).render(<Providers />);
