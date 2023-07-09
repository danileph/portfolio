import Heading from "@/components/sections/about/Heading";
import {Wrapper} from "@/components/wrapper";
import Image, {default as ImageNext} from "next/image";
import Typography from "@/components/ui/typography/Typography";
import {Section} from "@/components/section";
import RootProvider from "@/components/root-provider/RootProvider";
import Skeleton from "@/components/skeleton/Skeleton";
import SidePanel from "@/components/content-viewer/SidePanel";
import {Title} from "@/components/ui/title";
import useViewport from "@/hooks/useViewport";
import {DATE_FORMAT} from "@/lib/consts/date-format";
import {Ref} from "@/components/ui/ref";
import {Tag} from "@/components/ui/tag";
import LoadingSkeletonMainPage from "@/components/skeleton/LoadingSkeletonMainPage";


export default function Loading() {
  return (
    <LoadingSkeletonMainPage />
  )
}