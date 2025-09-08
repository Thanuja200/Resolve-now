import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Complaint
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Streamline complaint registration and management with our secure, efficient platform. 
              Submit, track, and resolve issues with complete transparency and real-time updates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Submit Complaint
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 max-w-lg mx-auto">
            <div className="text-center space-y-2">
              <CheckCircle className="h-8 w-8 text-secondary mx-auto" />
              <div className="text-2xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center space-y-2">
              <Users className="h-8 w-8 text-secondary mx-auto" />
              <div className="text-2xl font-bold text-foreground">50K+</div>
              <div className="text-sm text-muted-foreground">Users</div>
            </div>
            <div className="text-center space-y-2">
              <Clock className="h-8 w-8 text-secondary mx-auto" />
              <div className="text-2xl font-bold text-foreground">24h</div>
              <div className="text-sm text-muted-foreground">Avg Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;