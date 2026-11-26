import styled from 'styled-components';
import { Section, Prompt, Heading, Lead } from '../components/Section';

const Badge = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${p => p.theme.background};
  background: ${p => p.theme.accent};
  padding: 0.15rem 0.5rem;
  margin-bottom: 1rem;
`;

const Flow = styled.ol`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin-bottom: 2.5rem;
  counter-reset: step;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Step = styled.li`
  counter-increment: step;
  position: relative;
  border: 1px solid ${p => p.theme.border};
  background: ${p => p.theme.surface};
  padding: 1rem;
  margin-right: 1.25rem;

  &::before {
    content: '0' counter(step);
    display: block;
    font-size: 0.7rem;
    font-weight: 700;
    color: ${p => p.theme.accent};
    margin-bottom: 0.35rem;
  }

  /* arrow connector */
  &:not(:last-child)::after {
    content: '→';
    position: absolute;
    right: -1.15rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${p => p.theme.textMuted};
  }

  &:last-child { margin-right: 0; }

  h3 {
    font-size: 0.85rem;
    font-weight: 700;
    color: ${p => p.theme.text};
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.78rem;
    color: ${p => p.theme.textMuted};
    line-height: 1.5;
  }

  @media (max-width: 760px) {
    margin-right: 0;
    margin-bottom: 1.25rem;

    &:not(:last-child)::after {
      content: '↓';
      right: auto;
      left: 1rem;
      top: auto;
      bottom: -1.3rem;
      transform: none;
    }
  }
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Window = styled.figure`
  border: 1px solid ${p => p.theme.border};
  background: ${p => (p.theme.name === 'crt' ? '#0a0908' : p.theme.surface)};
  min-width: 0;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.7rem;
  color: ${p => p.theme.textMuted};
  border-bottom: 1px solid ${p => p.theme.border};
  padding: 0.4rem 0.75rem;

  i {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 1px solid ${p => p.theme.textMuted};
  }

  span { margin-left: auto; }
`;

const Pre = styled.pre`
  font-family: inherit;
  font-size: 0.76rem;
  line-height: 1.7;
  color: ${p => p.theme.text};
  padding: 1rem;
  overflow-x: auto;
  white-space: pre;

  .c { color: ${p => p.theme.textMuted}; }
  .a { color: ${p => p.theme.accent}; }
  .g { color: ${p => p.theme.accentAlt}; }
  .w { color: ${p => p.theme.warn}; }
`;

const Caption = styled.figcaption`
  font-size: 0.68rem;
  color: ${p => p.theme.textMuted};
  border-top: 1px dashed ${p => p.theme.border};
  padding: 0.4rem 0.75rem;
`;

const Principles = styled.ul`
  display: grid;
  gap: 1rem;

  li {
    padding-left: 1.25rem;
    position: relative;
    font-size: 0.85rem;
    color: ${p => p.theme.textMuted};
  }

  li::before {
    content: '>';
    position: absolute;
    left: 0;
    color: ${p => p.theme.accentAlt};
    font-weight: 700;
  }

  strong {
    display: block;
    color: ${p => p.theme.text};
  }
`;

const STEPS = [
  { title: 'Report', body: 'A technician describes the problem in plain words.' },
  { title: 'Retrieve', body: "Searches the plant's manuals, past work orders and lockout procedures." },
  { title: 'Draft', body: 'Writes a corrective work order. Every statement cites its source.' },
  { title: 'Approve', body: 'A supervisor reviews and signs. Nothing goes ahead before that.' },
];

const PRINCIPLES = [
  {
    title: 'Every claim cites its source',
    body: 'Each line of a draft links back to the manual page, past work order or procedure it came from.',
  },
  {
    title: 'Unsupported steps are flagged',
    body: "Anything the plant's documents can't back up is marked for a person to check instead of being stated as fact.",
  },
  {
    title: 'A supervisor signs off',
    body: 'The draft is a proposal. Work starts only after a supervisor approves it.',
  },
  {
    title: 'Runs entirely on-site',
    body: 'It runs on a computer inside the plant. The documents never leave the building.',
  },
];

function LineReady() {
  return (
    <Section id="lineready">
      <Prompt path="~/startups">cat lineready/README.md</Prompt>
      <Badge>Currently building</Badge>
      <Heading>LineReady</Heading>
      <Lead>
        LineReady turns a problem reported on the floor into a work order that cites its
        sources and is ready for a supervisor to sign. It uses the plant's own documents and
        runs entirely on-site.
      </Lead>

      <Flow aria-label="How LineReady works">
        {STEPS.map(s => (
          <Step key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </Step>
        ))}
      </Flow>

      <Split>
        <Window>
          <TitleBar>
            <i /><i /><i />
            <span>lineready — on-prem</span>
          </TitleBar>
          <Pre>
<span className="c">$</span> lineready report <span className="a">"Line 3 capper keeps jamming"</span>{'\n'}
<span className="c">  searching manuals, work orders, LOTO procedures…</span>{'\n'}
{'\n'}
<span className="a">DRAFT WORK ORDER</span> · Line 3 capper jam{'\n'}
  1. Lock out capper per procedure  <span className="g">[LOTO-L3-CAP §2]</span>{'\n'}
  2. Inspect chuck clutch for wear  <span className="g">[Capper manual p.41]</span>{'\n'}
  3. Clear and realign star wheel   <span className="g">[WO-1182]</span>{'\n'}
  <span className="w">! 4. Clutch torque spec: no source found</span>{'\n'}
  <span className="w">     → flagged for review</span>{'\n'}
{'\n'}
<span className="c">status:</span> <span className="a">awaiting supervisor approval</span>
          </Pre>
          <Caption>Illustrative example. Not real plant data.</Caption>
        </Window>

        <Principles>
          {PRINCIPLES.map(p => (
            <li key={p.title}>
              <strong>{p.title}</strong>
              {p.body}
            </li>
          ))}
        </Principles>
      </Split>
    </Section>
  );
}

export default LineReady;
