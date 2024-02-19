import { Wrapper } from "@/components/wrapper";
import { Author } from "@/app/projects/[projectId]/author";
import { Title } from "@/components/ui/title";
import Typography from "@/components/ui/typography/Typography";
import { Tag } from "@/components/ui/tag";
import { Suspense } from "react";
import LoadingSkeletonProjectPage from "@/components/skeleton/LoadingSkeletonProjectPage";

export default function Loading() {
  return <LoadingSkeletonProjectPage />;
}
