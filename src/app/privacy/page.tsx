import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "Политика конфиденциальности | Звезда караоке",
};

export default function PrivacyPage() {
  return (
    <div className="bg-base py-16 md:py-24">
      <Container className="max-w-2xl">
        <Link href="/" className="text-sm text-sage-dark hover:underline">
          ← На главную
        </Link>
        <h1 className="mt-6 font-display text-3xl font-bold text-primary">
          Политика конфиденциальности
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          Заглушка для демо-версии. Текст политики обработки персональных данных
          будет добавлен перед запуском боевого сайта.
        </p>
      </Container>
    </div>
  );
}
