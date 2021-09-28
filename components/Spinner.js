import { CircularProgress } from "@mui/material";
import Layout from "./Layout";

export default function Spinner() {
  return (
    <Layout title="Loading...">
      <div className="flex justify-center w-full mx-auto">
        <CircularProgress />
      </div>
    </Layout>
  );
}
