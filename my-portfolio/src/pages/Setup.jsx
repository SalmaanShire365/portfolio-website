import styled from 'styled-components';
import { Section, Prompt, Heading, Tags, Tag } from '../components/Section';

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const SubHeading = styled.h3`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${p => p.theme.accent};
  margin-bottom: 1rem;
`;

const Group = styled.div`
  margin-bottom: 1.25rem;

  p {
    font-size: 0.75rem;
    color: ${p => p.theme.textMuted};
    margin-bottom: 0.4rem;
  }
`;

const Spec = styled.dl`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 1.25rem;
  row-gap: 0.55rem;
  font-size: 0.85rem;

  dt {
    color: ${p => p.theme.accentAlt};
    font-weight: 700;
  }

  dd {
    color: ${p => p.theme.text};
    min-width: 0;
  }

  dd small {
    display: block;
    font-size: 0.75rem;
    color: ${p => p.theme.textMuted};
  }
`;

const STACK = [
  { label: 'languages', items: ['Java', 'Python', 'Rust', 'JavaScript'] },
  { label: 'frameworks', items: ['Spring Boot', 'React', 'Flask', 'Node'] },
  { label: 'AI', items: ['Ollama', 'RAG / embeddings', 'Local LLMs', 'Evals'] },
  { label: 'infra', items: ['Azure', 'GitHub Actions', 'Linux', 'MySQL'] },
];

const SETUP = [
  { key: 'os', value: 'Arch Linux' },
  { key: 'wm', value: 'dwm', note: 'suckless tiling window manager' },
  { key: 'launcher', value: 'dmenu' },
  { key: 'editor', value: 'Neovim', note: 'built from kickstart.nvim' },
  { key: 'gpu', value: 'RTX 5070 Laptop (8 GB)', note: 'where the local models run' },
  { key: 'models', value: 'qwen3 via Ollama' },
];

function Setup() {
  return (
    <Section id="setup">
      <Prompt path="~">neofetch --stack</Prompt>
      <Heading>Stack &amp; setup</Heading>
      <Columns>
        <div>
          <SubHeading>Stack</SubHeading>
          {STACK.map(g => (
            <Group key={g.label}>
              <p>{g.label}</p>
              <Tags>
                {g.items.map(i => <Tag key={i}>{i}</Tag>)}
              </Tags>
            </Group>
          ))}
        </div>
        <div>
          <SubHeading>Daily driver</SubHeading>
          <Spec>
            {SETUP.map(s => (
              <div key={s.key} style={{ display: 'contents' }}>
                <dt>{s.key}</dt>
                <dd>
                  {s.value}
                  {s.note && <small>{s.note}</small>}
                </dd>
              </div>
            ))}
          </Spec>
        </div>
      </Columns>
    </Section>
  );
}

export default Setup;
