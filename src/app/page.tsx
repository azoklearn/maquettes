import {
  Heading,
  Text,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Avatar,
  Flex,
} from "@once-ui-system/core";
import { home, person, baseURL, gallery } from "@/resources";
import GalleryView from "@/components/gallery/GalleryView";
import ColorBends from "@/components/ColorBends";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }}>
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={30}
          speed={0.3}
          scale={1.2}
          frequency={1.4}
          warpStrength={1.2}
          mouseInfluence={0.8}
          parallax={0.6}
          noise={0.08}
          transparent
        />
      </div>
      <Flex fillWidth position="relative" style={{ minHeight: "100vh", zIndex: 1 }}>
        <Column maxWidth="l" gap="xl" paddingY="12" horizontal="center" style={{ position: "relative", zIndex: 1 }}>
        <Schema
          as="webPage"
          baseURL={baseURL}
          path={home.path}
          title={home.title}
          description={home.description}
          image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}${gallery.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
        <Column fillWidth horizontal="center" gap="m" marginBottom="xl">
          <Column maxWidth="s" horizontal="center" align="center">
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Avatar
                src={person.avatar}
                size="xl"
                style={{ 
                  marginBottom: "var(--static-space-24)",
                  width: "200px",
                  height: "200px"
                }}
              />
            </RevealFx>
            <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="24">
              <Heading wrap="balance" variant="display-strong-l">
                {home.headline}
              </Heading>
            </RevealFx>
            <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="16">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l" style={{ textAlign: "center" }}>
                👨‍🎨 Créateur de contenu visuel spécialisé dans le monde sportif
              </Text>
            </RevealFx>
            <RevealFx translateY="8" delay={0.3} fillWidth horizontal="center" paddingBottom="16">
              <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l" style={{ textAlign: "center" }}>
                ⚽️ Des créations pour briller sur et hors du terrain...
              </Text>
            </RevealFx>
            <RevealFx translateY="8" delay={0.4} fillWidth horizontal="center" paddingBottom="32">
              <Text wrap="balance" onBackground="neutral-weak" variant="body-default-m" style={{ textAlign: "center" }}>
                92 publications • 535 followers • 968 suivi(e)s
              </Text>
            </RevealFx>
            {home.featured.display && (
              <RevealFx
                fillWidth
                horizontal="center"
                paddingBottom="32"
                paddingLeft="12"
                delay={0.5}
              >
                <Badge
                  background="brand-alpha-weak"
                  paddingX="12"
                  paddingY="4"
                  onBackground="neutral-strong"
                  textVariant="label-default-s"
                  arrow={false}
                  href={home.featured.href}
                >
                  <Row paddingY="2">{home.featured.title}</Row>
                </Badge>
              </RevealFx>
            )}
          </Column>
        </Column>
        <RevealFx translateY="16" delay={0.6} fillWidth>
          <GalleryView />
        </RevealFx>
        </Column>
      </Flex>
    </>
  );
}
