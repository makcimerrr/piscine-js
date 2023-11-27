function getAcceleration(obj) {
    const { f, m, Δv, Δt, t, d } = obj;
   
    if (f !== undefined && m !== undefined) {
       const a = f / m;
       return a;
    }
   
    if (Δv !== undefined && Δt !== undefined) {
       const a = Δv / Δt;
       return a;
    }
   
    if (t !== undefined && d !== undefined) {
       const a = 2 * d / (t * t);
       return a;
    }
   
    return "impossible";
   }

   const acceleration = getAcceleration({
    f: 10,
    m: 5,
     Δv: 100,
     Δt: 50,
    t: 1,
    d: 10
   });
   
   console.log(acceleration);