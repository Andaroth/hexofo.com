import { FC, useState } from "react";

import { Stack, Flex, Text, Image, InputGroup,InputRightElement, Input, Button, Spacer } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md"
import { FaTimes } from "react-icons/fa"
import { ExternalLinkIcon } from "@chakra-ui/icons";

import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

import { state, fetchArticles } from "../AppState";
import { useSnapshot } from "valtio";

const Guide: FC = () => {
    const { wpArticles } = useSnapshot(state)
    const [searchText, setSearchText]: [string, any] = useState("");

    if (!wpArticles.length) fetchArticles()

    const trends = [
        { label: "Salles", value: "salles" },
        { label: "Gold", value: "gold" },
        { label: "Robots", value: "BOT" },
        { label: "NFT", value: "nft" },
        { label: "Hexofo", value: "HEXOFO" },
        { label: "Blog", value: "blog" },
    ];
    const db:any = []
    wpArticles.filter(art => art.title !== "Le guide Hexofo").forEach(article => {
        db.push({
            title: article.title,
            content: article.content,
            tags: ["comment", "blog"],
            link: article.url
        })
    })

    const selfDb = [
        {
            title: "Gagner des gold",
            content: "Pour gagner des gold gratuitement tu peux regarder les publicités, tourner la roue de la chance et remplir des sondages sur le jeu. Tu peux également acheter des packs d'or sur le site officiel.",
            tags: ["comment", "gold", "shop", "cash", "or"],
        },
        {
            title: "Avoir un slime",
            content: "Pour avoir un slime il faut posséder un NFT de type \"LAND\".",
            tags: ["comment", "opensea", "nonfungibletoken"],
            link: "https://highrise.helpshift.com/hc/fr/3-highrise---your-avatar-community/faq/161-what-is-highrise-land/"
        },
        {
            title: "Avoir des jetons créature",
            content: "Pour avoir des jetons créature il te faut des NFT de type \"CREATURE\". Tu reçois 25 jetons par jour pour chaque NFT détenu. Clique pour plus d'infos.",
            tags: ["comment", "opensea", "nonfungibletoken"],
            link: "https://highrise.helpshift.com/hc/fr/3-highrise---your-avatar-community/faq/160-what-are-creature-coins-and-how-can-i-earn-them/"
        },
        {
            title: "Acheter des NFT",
            content: "Pour acheter des NFT, il te faut un portefeuille de cryptomonnaie. Suis les instructions officielles sur le site de HighRise!",
            tags: ["comment", "opensea", "nonfungibletoken", "immutable", "metamask"],
            link: "https://highrise.helpshift.com/hc/fr/3-highrise---your-avatar-community/faq/170-how-do-i-purchase-a-highrise-creature/"
        },
        {
            title: "Rejoindre Hexofo",
            content: "Pour rejoindre l'équipe, il faut être majeur et demander la permission soit à @wardaaz soit à @NOmade49. Tu peux aussi postuler en cliquant ici.",
            tags: ["comment", "crew", "equipe", "équipe", "team"],
            link: "https://docs.google.com/forms/d/e/1FAIpQLScOq61gb-sET6_GV5QiaxjcecQhGlajB-qn7_C-n_j8fKebCQ/viewform?usp=sf_link"
        },
        {
            title: "Créer une équipe",
            content: "Pour créer ta propre équipe, il te faut 200 gold et tu trouvera le bouton pour créer en haut à gauche.",
            tags: ["comment","crew","equipe","équipe","team"]
        },
        {
            title: "Créer un robot",
            content: "Pour avoir ton propre assistant HR, il faut savoir coder. Tu trouvera la documentation dans la FAQ. Clique pour plus d'infos.",
            tags: ["comment", "crew", "equipe", "équipe", "team"],
            link: "https://highrise.game/fr/support/web-api"
        },
        {
            title: "Avoir un meilleur style",
            content: "Avoir des objets peut prendre du temps. Joue aux évenements pour vendre ou échanger tes récompenses. Tu peux aussi acheter des gold sur la boutique du jeu.",
            tags: ["comment", "apparence", "shop", "cash", "or"],
        },
        {
            title: "Avoir plus de 50 visiteurs",
            content: "Pour que ta salle accepte plus que 50 visiteurs, il faut que tu possède un LAND de HighRise. Clique pour plus d'infos.",
            tags: ["comment", "salles", "nft", "nonfungibletoken"],
            link: "https://highrise.helpshift.com/hc/fr/3-highrise---your-avatar-community/faq/161-what-is-highrise-land/"
        },
        {
            title: "Collaborer avec Hexofo",
            content: "Nous acceptons d'apporter notre soutien aux joueurs de HighRise France en sponsorisant vos soirées. Clique ici pour postuler !",
            tags: ["comment", "tips", "party", "mix", "dj", "live", "hrlive"],
            link: "https://docs.google.com/forms/d/e/1FAIpQLScc3HjIt7VB0LK-IMGOWdTokFMVLPsG6etj0rJrj0YlCc73OQ/viewform?usp=sf_link"
        },
        {
            title: "Connaître les dates de soirée",
            content: "Même si nous aimons faire des fêtes improvisées, il est possible de trouver notre calendrier sur le site ou en cliquant ici.",
            tags: ["comment", "tips", "party", "mix", "dj", "live", "hrlive", "hexofo", "soirée", "soiree"],
            link: "https://hexofo.com/blog/agenda"
        },
    ]
    selfDb.forEach(el => db.push(el))

    const searchResults = () => searchText.length ? db.filter((test:any) => JSON.stringify(test).toLowerCase().includes(searchText.toLowerCase())) : []

    return <>
        <Stack minH="100vh" pb="0" id="top">
            <Stack as="section" justifyContent="center" minH="100vh">
                <Stack className="overlay"
                    position="fixed"
                    bg="blackAlpha.700"
                    opacity={searchText.length ? '1' : '0'}
                    pointerEvents={searchText.length ? 'initial' : 'none'}
                    transition="all .5s ease"
                    w="100vw"
                    h="100vh"
                    zIndex="10"
                    onClick={() => setSearchText('')}
                />
                <Flex justifyContent="center" transition="all .5s ease">
                    <Stack w={{ base: "calc(100vw - 48px)", md: "600px" }} zIndex="20">
                        <Flex justifyContent="center" h={{ base: "160px", md: "200px" }}>
                            <Image w={{base:"160px", md:"200px"}} src="./AndaLixe_noob.png" alt="guide Hexofo" mx="auto" />                            
                        </Flex>
                        <Text fontSize="2xl" textAlign="center" color="white" transition="all .6s ease">Bienvenue sur le guide Hexofo</Text>
                        { !searchText.length ? <Flex pb="4"><Text textAlign="center" color="white" w={{ base: "100%", md: "420px" }} mx="auto">Nous remplissons notre documentation au fur et à mesure alors n'hésite pas à nous partager tes idées !</Text></Flex> : ''}
                        <InputGroup transition="all .75s ease">
                            <Input
                                placeholder="Fais une recherche..."
                                onChange={(e) => setSearchText(e.target.value)}
                                w={{ base: "100%", md: "600px" }}
                                border="2px solid white"
                                p="4"
                                color="white"
                                bg="whiteAlpha.300"
                                _placeholder={{ color: "whiteAlpha.700" }}
                                value={searchText}
                                _focus={{ border: "2px solid #0F0", outline: "none !important" }}
                            />
                            <InputRightElement>
                                { !searchText.length ? <MdSearch color="white" /> : <FaTimes cursor="pointer" onClick={() => setSearchText("")} color="red" />}
                            </InputRightElement>
                        </InputGroup>
                        {!searchText.length ? <Stack pt="8">
                            <Text color="whiteAlpha.500">Recherches courantes :</Text>
                            <Flex>
                                {trends.map(t => <Button key={trends.indexOf(t)}
                                    h="32px"
                                    px="2"
                                    mr="1"
                                    bg="rgba(0,255,0,.5)"
                                    color="black"
                                    borderRadius="16px"
                                    _hover={{ bg: "#0F0" }}
                                    onClick={() => setSearchText(t.value)}
                                >{t.label}</Button>)}
                            </Flex>
                        </Stack> : <Stack bg="white" color="black" borderRadius="xl" pt="4" w={{ base: "100%", md: "600px" }}>
                                <Text fontWeight="bold" fontSize="lg" px="6">Résultats:</Text>
                                <Stack maxH={{base:"200px" ,md:"400px"}} overflowY="scroll" borderTop="1px solid #ccc" px="6" pt="2">
                                    {searchResults().length ? searchResults().map((data:any) => <Stack key={db.indexOf(data)} pb="1" _hover={data.link ? { bg: "aliceblue" } : {}} cursor={data.link ? 'pointer' : 'initial'}
                                        onClick={() => data.link ? window.open(data.link,'_blank') : null}
                                    >
                                        <Flex>
                                            <Stack>
                                                <Text fontWeight="bold">{ data.title }</Text>
                                                <Text>{ data.tags.includes('blog') && data.content ? data.content.slice(1,100) + '... Clique ici pour lire l\'article !' : data.content }</Text>
                                            </Stack>
                                            { data.link ? <Spacer /> : ''}
                                            { data.link ? <ExternalLinkIcon /> : ''}
                                        </Flex>
                                    </Stack>) : <Text py="8">Bruh, j'ai rien trouvé... 👀</Text>}
                                </Stack>
                        </Stack>}
                    </Stack>
                </Flex>
            </Stack>
        </Stack>

        <Footer />

        <TopBar links={[
            {
                label: "Notre site",
                to: "/"
            },
            {
                label: "Blog",
                to: "https://hexofo.com/blog"
            },
        ]} />
    </>
}

export default Guide;