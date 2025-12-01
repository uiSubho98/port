"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { SKILLS } from "@/app/lib/data";

const chartConfig = {
  proficiency: {
    label: "Proficiency",
    color: "hsl(var(--primary))",
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">
            My Tech Arsenal
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>
        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <ChartContainer config={chartConfig} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={SKILLS}
                layout="vertical"
                margin={{ left: 10, right: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "hsl(var(--foreground))", fontSize: 14 }}
                  width={120}
                />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--card))' }}
                  content={<ChartTooltipContent 
                    indicator="dot" 
                    labelKey="proficiency" 
                    nameKey="name"
                    formatter={(value) => `${value}%`}
                  />}
                />
                <Bar dataKey="proficiency" fill="var(--color-proficiency)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    </section>
  );
}
