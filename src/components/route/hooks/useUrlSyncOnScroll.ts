import {useEffect} from "react";
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import {useScroll} from "@/components/route/hooks/useScroll";

export const useUrlSyncOnScroll = () => {
  const pathname = usePathname() ;
  const router = useRouter();
  const scrollTo = useScroll();
  const params = useParams();
  const handler = () => {
    const hash = window.location.hash;
    console.log(hash)
    if (hash) {
      const sectionId = hash.substring(1);
      scrollTo(sectionId);
      window.history.replaceState(null, '', pathname)
      // router.push(pathname, undefined, {shallow: true})
    }
  }

  // useEffect(() => {
  //   window.addEventListener('locationchange', handler);
  //   return () => {
  //     window.removeEventListener('locationchange', handler);
  //   }
  // }, [])

  useEffect(() => {
    handler()
  }, [pathname, params])
}