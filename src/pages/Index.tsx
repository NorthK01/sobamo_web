import { Link } from "react-router-dom";
import { ArrowRight, Users, TrendingUp, Shield, Sprout, Target, Eye, Heart, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import sobamoLogo from "@/assets/sobamo.png";
import sobamo2 from "@/assets/sobamo2.png";
const features = [
  {
    icon: Users,
    title: "Farmer Training",
    description: "Learn professional avocado farming techniques from experts.",
  },
  {
    icon: TrendingUp,
    title: "Market Linkage",
    description: "Connect directly with buyers for fair prices and stable income.",
  },
  {
    icon: Shield,
    title: "Fair Trade",
    description: "Transparent pricing and ethical trade practices you can trust.",
  },
];

const values = [
  {
    icon: Users,
    title: "Community First",
    description: "We prioritize the wellbeing and growth of our farming community.",
  },
  {
    icon: Sprout,
    title: "Sustainability",
    description: "Promoting environmentally responsible farming practices.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Transparent and honest dealings in all our partnerships.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Sprout className="h-4 w-4" />
                <span>Avocado Farmers CBO</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Empowering Farmers.{" "}
                <span className="text-primary">Growing Wealth.</span>{" "}
                <span className="text-sobamo-dark-green">Sustaining Communities.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                SOBAMO empowers small-scale farmers with knowledge, market access, 
                and fair trade opportunities to build sustainable livelihoods through avocado farming.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="gap-2">
                  <a href="#about">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Contact SOBAMO</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img
                src={sobamoLogo}
                alt="SOBAMO - Avocado Farming"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl animate-fade-in rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">SOBAMO</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive support to help farmers succeed in the avocado industry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                About <span className="text-primary">SOBAMO</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SOBAMO (Avocado Farmers Community Based Organization) is a grassroots 
                initiative dedicated to empowering small-scale avocado farmers in Kenya. 
                We believe that through knowledge, cooperation, and fair market access, 
                every farmer can achieve financial independence and contribute to 
                sustainable community development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded by passionate farmers and agricultural experts, SOBAMO bridges 
                the gap between rural farmers and profitable markets. We provide 
                comprehensive training, facilitate buyer connections, and advocate 
                for transparent, fair pricing in the avocado industry.
              </p>
           {/* Parent container: Grid layout (1 col on mobile, 2 cols on desktop) */}
<div className="grid md:grid-cols-2 gap-8 items-center">
  
  {/* NEW IMAGE (Left side) */}
  <div className="relative flex justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full blur-2xl" />
    <img
      src={sobamo2} 
      alt="New Description"
      className="relative z-10 w-full max-w-sm -2xl"
    />
  </div>

  {/* ORIGINAL IMAGE (Right side) */}
  <div className="relative flex justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30  blur-2xl" />
    <img
      src={''}
      
      className="relative z-10 w-full max-w-sm rounded-full shadow-2xl"
    />
  </div>
  </div> 
  </div>

</div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-l-4 border-l-primary shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To empower avocado farmers with knowledge, skills, and market access 
                  that enables them to maximize their yields, secure fair prices, and 
                  build sustainable livelihoods for their families and communities.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A thriving agricultural community where every farmer has the resources, 
                  knowledge, and connections needed to prosper, contributing to food 
                  security and economic growth in the region.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Community at Our Heart
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At SOBAMO, we understand that farming is more than just agriculture—it's 
              about families, traditions, and livelihoods. Our programs are designed 
              to uplift entire communities, from youth involvement in agribusiness to 
              supporting women farmers. Together, we're building a future where 
              prosperity grows naturally, like the avocados we cultivate.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
