<template>
  <section class="section services-section">
    <div class="container">
      <div class="services-box">
        <div class="services-category">
          <div class="services-category-icon">
            <img src="../../assets/icons/ico_design.svg" alt="Design Icon" />
          </div>
          <div class="services-texts">
            <h2>Design</h2>
            <p>
              To ensure the success of each project, we prioritize open
              communication from the outset. Understanding your vision is
              critical to our success, and that's why we use a combination of
              verbal communication and visual aids. Our dedicated design team
              specializes in planning and scheduling to ensure every aspect of
              your vision is captured and accounted for. This initial
              consultation lays the foundation for a smooth project experience,
              ensuring everyone involved understands the full scope of the
              project
            </p>
          </div>
        </div>
        <div class="separator-height"></div>
        <div class="services-cards">
          <ServicesProcessCard
            processNumber="1"
            title="Initial Consultation"
            description="We meet with you to discuss the project goals, budget, and timeline"
          />
          <ServicesProcessCard
            processNumber="2"
            title="Writing the Estimate"
            description="Based on the information gathered during the consultation, we then write an estimate for the project, including a breakdown of materials, labor, and other costs"
          />
          <ServicesProcessCard
            processNumber="3"
            title="Design & Planning"
            description="We create architectural drawings and 3D visualisations of the project to help you visualise the final result. This may involve working with an architect or designer to ensure all necessary permits are obtained and the plans are up to code"
          />
          <ServicesProcessCard
            processNumber="4"
            title="Contract Approval"
            description="We await your approval on our estimate and then you sign the contract, and the necessary permits and approvals are obtained."
          />
        </div>
      </div>

      <div class="card-margin">
        <ServicesProcessCard
          processNumber="5"
          title="Preconstruction"
          description="We order the required materials, hire and schedule other subcontractors, and prepare the building site for construction"
        />
      </div>
      <div class="services-box">
        <div class="services-cards">
          <ServicesProcessCard
            processNumber="6"
            title="Building"
            description="Our construction team begins the actual building process, following the plans and schedule outlined in the design phase. This phase may also have regular check-ins with you to ensure project is on track"
          />
          <ServicesProcessCard
            processNumber="7"
            title="Writing the Estimate"
            description="Based on the information gathered during the consultation, we then write an estimate for the project, including a breakdown of materials, labor, and other costs"
          />
          <ServicesProcessCard
            processNumber="8"
            title="Final Inspection"
            description="Upon completion of the project, we conduct a final inspection to ensure all work has been done to the highest standards and meets the client's expectations"
          />
          <ServicesProcessCard
            processNumber="9"
            title="Final Handover"
            description="The client approves the final payment, and we hand over the completed project to the client"
          />
        </div>
        <div class="separator-height"></div>
        <div class="services-category">
          <div class="services-category-icon">
            <img src="../../assets/icons/ico_design.svg" alt="Design Icon" />
          </div>

          <div class="services-texts">
            <h2>Build</h2>
            <p>
              After the planning phase is completed, it's time to move on to the
              Build phase. Our highly skilled team of builders will meticulously
              follow the plans and pay close attention to ensuring quality at
              every stage. Your property and belongings will be protected during
              the construction process and, upon completion, any moved items
              will be returned to their original place and the site will be
              thoroughly cleaned. This ensures a seamless transition to enjoying
              your newly refreshed space. Our team will work closely with you
              throughout the entire process to make sure that every aspect of
              your vision is realised.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ServicesProcessCard from "./ServicesProcessCard.vue";
</script>

<style scoped>
.services-section {
  background-color: var(--primary-low-c);
}

.services-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.services-category {
  width: 500px;
  display: flex;
  flex-direction: row;
  gap: var(--s-m);
}

.services-category-icon {
  background-color: var(--text-c);
  width: max-content;
  height: max-content;
  border-radius: 50%;
}

.services-category-icon img {
  width: 84px;
  height: 84px;
  padding: 12px;
}

.services-cards {
  display: flex;
  flex-direction: column;
  gap: var(--m-m);
}

.card-margin {
  width: max-content;
  margin: var(--m-m) auto;
}
</style>
