import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export default function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <span className={classes.highlight}>便利な</span> DiscordBot
            </Title>
            <Text color="dimmed" mt="md">
              Aquedは、使いやすく、様々な機能を搭載している DiscordBotです。
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>完全無料でオープンソース</b> –
                botの使用は完全無料で、Botのソースコードは
                <Link href="https://github.com/aqued-dev/aqued">github</Link>
                で公開されています
              </List.Item>
              <List.Item>
                <b>安全</b> – データの値を暗号化しています。
              </List.Item>
              <List.Item>
                <b>使いやすい</b> –
                最新の機能(ボタン等)を使ってるため、わかりやすいです
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius="xl"
                size="md"
                className={classes.control}
                onClick={() => {
                  window.location.href = '/docs/tutorial';
                }}
              >
                Botチュートリアルを見る
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
                onClick={() => {
                  window.location.href = 'https://github.com/aqued-dev/aqued';
                }}
              >
                Botのソースコード
              </Button>
              <Link href="/docs/tos">利用規約</Link>
              <Link href="/docs/privacy">プライバシーポリシー</Link>
            </Group>
          </div>
          <Image
            src="https://cdn.discordapp.com/avatars/1115469267085824020/1c04b2940cb828bd4de8810ebbe8d7fc.png"
            className={classes.image}
            alt=""
          />
        </div>
      </Container>
    </div>
  );
}
