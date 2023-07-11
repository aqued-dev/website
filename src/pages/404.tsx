import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  title: {
    fontWeight: 900,
    fontSize: rem(34),
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export default function NotFoundImage() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}
      >
        <div>
          <Title className={classes.title}>何かがおかしい...</Title>
          <Text color="dimmed" size="lg">
            開こうとしているページは存在しません。アドレスを間違えたか、ページが別の
            URL に移動された可能性があります。
            これがエラーだと思われる場合は、サポートにお問い合わせください。
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
            onClick={() => {
              window.location.href = '/';
            }}
          >
            ホームに戻る
          </Button>
        </div>
      </SimpleGrid>
    </Container>
  );
}
