export const useScroll = () => {
  const scrollToSection = (sectionId: string) => {
    const seciton = document.getElementById(sectionId);
    seciton?.scrollIntoView({behavior: 'smooth'})
  }

  return(scrollToSection)
}