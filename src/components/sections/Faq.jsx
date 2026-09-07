import Reveal from "@/components/Reveal";
import { faqs } from "@/data/faqs";
import { useI18n } from "@/hooks/use-i18n";

export default function Faq() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 lg:py-32 bg-secondary/40" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {t("common.commonQuestions")}
        </Reveal>
        <Reveal as="h2" delay={0.06} id="faq-heading" className="mt-3 max-w-2xl font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
          {t("common.thingsPeopleAsk")}
        </Reveal>

        <dl className="mt-12 grid gap-4 md:grid-cols-2">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <div className="h-full rounded-3xl border border-border/70 bg-card p-7">
                <dt className="font-heading text-xl font-semibold text-foreground">{item.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
