import {
  Navbar,
  Group,
  Code,
  ScrollArea,
  createStyles,
  rem,
} from '@mantine/core';
import {
  IconCalendarStats,
  IconBook,
  IconPuzzle,
  IconAxe,
} from '@tabler/icons-react';
import { LinksGroup } from './NavbarLinksGroup';

const data = [
  {
    label: 'Docs',
    icon: IconBook,
    initiallyOpened: true,
    links: [
      { label: '概要', link: '/docs/overview' },
      { label: 'コマンドリスト', link: '/docs/command-list' },
      { label: '利用規約', link: '/docs/tos' },
      { label: 'プライバシーポリシー', link: '/docs/privacy' },
    ],
  },
  {
    label: 'Command',
    icon: IconPuzzle,
    links: [
      { label: 'Ping', link: '/docs/command-ping' },
      { label: 'Force Pin', link: '/docs/command-force-pin' },
      { label: 'Force Pin解除', link: '/docs/command-force-pin-delete' },
    ],
  },
  {
    label: 'Tutorial',
    icon: IconBook,
    links: [
      { label: 'チュートリアル', link: '/docs/tutorial' },
      { label: 'botを導入する', link: '/docs/tutorial-botinvite' },
      { label: 'bump/up通知を有効にする', link: '/docs/tutorial-bump' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'v3.1.0', link: '/docs/v3.1.0' },
      { label: 'v3.0.1', link: '/docs/v3.0.1' },
      { label: 'v3.0.0', link: '/docs/v3.0.0' },
      { label: 'v2.3.0', link: '/docs/v2.3.0' },
      { label: 'v2.2.0', link: '/docs/v2.2.0' },
      { label: 'v2.1.1', link: '/docs/v2.1.1' },
      { label: 'v2.1.0', link: '/docs/v2.1.0' },
      { label: 'v2.1.0-beta2', link: '/docs/v2.1.0-b2' },
      { label: 'v2.1.0-beta1', link: '/docs/v2.1.0-b1' },
      { label: 'v2.0.0', link: '/docs/v2.0.0' },
      { label: 'v1.0.1', link: '/docs/v1.0.1' },
      { label: 'v1.0.0', link: '/docs/v1.0.0' },
      { label: 'v0.1.0', link: '/docs/v0.1.0' },
    ],
  },
  {
    label: 'Developer',
    icon: IconAxe,
    links: [
      { label: 'CONTRIBUTING', link: '/docs/CONTRIBUTING' },
      { label: 'MongoDB', link: '/docs/MongoDB' },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

export function NavbarNested({ url }: { url: string }) {
  const { classes } = useStyles();
  const links = data.map((item) => (
    <LinksGroup {...item} key={item.label} url={url} />
  ));

  return (
    <Navbar
      width={{ sm: 300 }}
      p="md"
      className={classes.navbar}
      sx={{ position: 'sticky' }}
    >
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Code sx={{ fontWeight: 700 }}>Aqued Docs</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}
