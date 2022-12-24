import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "51v93on6";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

console.log("ProjectId - ", projectId, dataset);
export default defineConfig({
  basePath: "/studio",
  name: "TaxLawAdvisers_Content_Studio",
  title: "Taxlawadvisers Content Studio",
  projectId: projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: StudioLogo,
    }
  },
  theme: myTheme
});
